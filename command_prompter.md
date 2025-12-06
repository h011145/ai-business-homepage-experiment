# コマンドプロンプター (command_prompter.py)

## 目的
AI（Gemini CLI）が直接コマンドを実行する代わりに、人間が実行すべき具体的なコマンドステップを記述した「作業書」を生成します。また、AI道具箱内のツールの仕様書を人間が確認できるように表示します。

## 機能
- 指定されたタスクキーワードに基づいて、そのタスクを実行するための詳細なコマンドステップをテキストファイル（作業書）として出力します。
- AI道具箱内のツールの仕様書（.mdファイル）を読み込み、表示します。

## 使用方法
このスクリプトは、タスクキーワードとそれに続く引数を指定して実行します。

```bash
python3 /home/hirosi/.gemini/tools/command_prompter.py <task_keyword> [args...]
```

### サポートされているタスク

#### 1. 新しいPythonプロジェクトのセットアップガイドを生成
- **タスクキーワード:** `python_project_setup`
- **引数:** `[output_file]` (オプション。デフォルトは `./作業書.txt`)
- **例:**
  ```bash
  python3 /home/hirosi/.gemini/tools/command_prompter.py python_project_setup python_setup_guide.txt
  ```

#### 2. ツールの仕様書を表示
- **タスクキーワード:** `show_spec`
- **引数:** `<tool_name>` (必須。表示したいツールの名前。例: `environment_readiness_checker`)
- **例:**
  ```bash
  python3 /home/hirosi/.gemini/tools/command_prompter.py show_spec environment_readiness_checker
  ```

## 備考
- 生成された作業書は、人間が読み、その指示に従ってコマンドを直接実行することを想定しています。
- AIは、このツールを呼び出すことで、人間への指示を生成したり、仕様書を提示したりします。