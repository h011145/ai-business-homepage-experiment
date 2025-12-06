# personal_context_agent.py の説明

## 概要
`personal_context_agent.py` は、Yggdrasil Agent Framework 上で動作するAIエージェントです。Gemini CLI などの外部LLMと連携する際、ユーザーの思考履歴やログ、プロファイル情報を要約・抽出し、次回の対話時に提示可能にすることを目的とした「自分専用エージェント」として開発されました。

## ファイル構造要件
このエージェントは以下のファイル構造を利用・管理します。

- `logs/user_logs/YYYYMMDD_user_log.json`: 毎日のユーザーログを保存します（時刻・発言を記録）。
- `data/user_profile.json`: ユーザーの特徴・趣味・語彙傾向を要約して格納します。
- `data/summary_for_gemini.txt`: Gemini CLI に渡す要約テキストを出力します。

## 機能要件
`personal_context_agent.py` は以下の機能を提供します。

1.  **前日のログの読み込み**: 前日 (`YYYYMMDD_user_log.json`) のユーザーログを読み込みます。
2.  **キーワード抽出**: 読み込んだログから、`scikit-learn` の `TfidfVectorizer` を用いてキーワード（特徴語）を抽出します。日本語の簡易的なトークナイザーを内部で利用しています。
3.  **`user_profile.json` の更新**: 抽出されたキーワードやログの分析に基づき、`user_profile.json` に統計情報（頻出語、話題傾向、使用スタイルなど）を追記・更新します。
    -   `frequent_words`: 頻出語とその出現回数を記録し、上位50語を保持します。
    -   `topic_trends`: 抽出されたキーワードを話題傾向として追加し、最新の20件を保持します。
    -   `usage_style`: 昨日の平均メッセージ長などの使用スタイルに関する情報を記録します。
4.  **Gemini CLI 向けテキストの整形**: 更新されたユーザープロファイルと抽出されたキーワードに基づき、Gemini CLI に渡すテキスト形式の要約を生成し、`summary_for_gemini.txt` に出力します。
5.  **ユーザーメッセージのログ記録**: `--agent-set user_message="xxx"` オプションで渡されたメッセージを、当日のログファイル (`logs/user_logs/YYYYMMDD_user_log.json`) にタイムスタンプと共に記録します。

## 実行方法
Yggdrasil Agent Framework のメインスクリプト `yggdrasil.py` を通じて実行します。

```bash
python yggdrasil.py personal_context_agent --agent-set user_message="今日の天気は晴れです"
```
上記のコマンドは、`"今日の天気は晴れです"` というメッセージをログに記録し、前日のログを処理してユーザープロファイルを更新し、Gemini CLI 向けの要約を生成します。`--agent-set user_message` オプションがない場合は、メッセージのログ記録は行わず、前日のログ処理と要約生成のみを実行します。
