# AI開発プロジェクトメモ - 2025年7月15日

## 本日の作業内容

*   AI開発プロジェクト管理機能の追加
    *   `ai_dev`ディレクトリと`project_state.json`の作成。
    *   `lib/ai_dev.sh`にAI開発プロセスを管理する関数（プロジェクト開始、続行、エラーフィードバック）を実装。
    *   `config/menu.conf`にAI開発関連のパスを追加。
    *   `menu.sh`に「AI開発プロジェクト管理 (開発中)」メニューを追加し、`lib/ai_dev.sh`を統合。

*   メニューのスクリプト目的別仕分け機能の追加（未完了）
    *   `config/script_categories.json`の作成。
    *   `lib/core.sh`にスクリプトカテゴリの読み書き、Geminiによるカテゴリ分類関数を追加。
    *   `load_scripts`関数を修正し、カテゴリに基づいてスクリプトを分類・表示するように変更。
    *   `initial_script_selection`関数を修正し、カテゴリ別にスクリプトを表示するように変更。

## 発生した問題とデバッグ状況

### Yggdrasilエージェント起動テスト時の問題

*   `initial_script_selection`がユーザー入力を待つ問題: `menu.sh`の`initial_script_selection`呼び出しを一時的にコメントアウトし、直接エージェントを呼び出すことで回避。
*   `gemini_error_commenter.py`の`NameError`: `os_DIR`を`SCRIPT_DIR`に修正。
*   `run_yggdrasil_pipeline.sh`の権限エラー: `/var/log`へのアクセスをダミー処理に置き換え、`sudo`を削除。
*   `gemini_error_commenter.py`の`ImportError`: `generate_text_with_gemini`を`query_gemini`に修正。
*   `gemini_error_commenter.py`の`SyntaxError` (try-exceptブロック): `try`ブロックの誤用を修正。
*   `gemini_error_commenter.py`の`SyntaxError` (孤立したexcept): 不要な`except`ブロックを削除。
*   `yggdrasil_agent.sh`が見つからないエラー: シンボリックリンクの再作成。
*   `log_parser.py`が見つからないエラー: `run_yggdrasil_pipeline.sh`の`YGGDRASIL_ROOT_DIR`の定義を修正。
*   メモリ不足エラー: `run_yggdrasil_pipeline.sh`のダミーログ生成を少量に限定。

### メニューのスクリプト目的別仕分け機能の問題

*   `lib/core.sh`の構文エラー (`}`の代わりに`fi`): 複数箇所を修正。
*   `print_colored`コマンドが見つからないエラー: `lib/core.sh`に`print_colored`関数を定義。
*   `CATEGORIZED_SCRIPTS`の「未割り当ての変数」エラー: `CATEGORIZED_SCRIPTS`の初期化とアクセス方法を修正。
*   `categorize_script_with_gemini`からの出力混入: Pythonスクリプトからの出力を厳密に制御し、デバッグメッセージを標準エラー出力にリダイレクトするように修正。

### メニューのスクリプト目的別仕分け機能のデバッグ状況（2025年7月15日）

*   `categorize_script_with_gemini`関数からの出力が不安定で、エラーメッセージやデバッグメッセージがカテゴリ名として扱われてしまう問題が継続。
*   `config/script_categories.json`のキャッシュを複数回削除し、クリーンな状態から再試行したが、問題は解決せず。
*   一時Pythonスクリプトの実行方法（シェバン、標準入力経由）を修正したが、Pythonインタプリタのパス認識や実行環境の問題が解消されず、Geminiによるカテゴリ分類が常に失敗し、「その他」に分類される状況が続いている。
*   デバッグループに陥っているため、この機能の開発は一時中断する。

## 残りの課題（更新）

*   **メニューのスクリプト目的別仕分け機能のデバッグ（一時中断）**: `categorize_script_with_gemini`関数が正しくカテゴリ名を返し、`load_scripts`関数がそれを適切に処理し、`initial_script_selection`関数がカテゴリ分けされたメニューを正しく表示できるようにする。この機能は現在デバッグループに陥っており、一時的に開発を中断する。

## 次のステップ（更新）

メニューのスクリプト目的別仕分け機能のデバッグは一時中断し、別のタスクに移行する。
