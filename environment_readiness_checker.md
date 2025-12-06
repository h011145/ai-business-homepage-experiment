# 環境レディネスチェッカー (environment_readiness_checker.py)

## 目的
AI（Gemini CLI）がタスクを実行する前に、必要なシステムコマンドとPythonライブラリがシステム環境に適切にインストールされているかを確認します。

## 機能
- 指定されたシステムコマンド（例: `ffmpeg`, `espeak`, `pdftotext`, `ffprobe`）の存在を確認します。
- `requirements.txt` に基づいて、Python仮想環境に必要なパッケージがインストールされているかを確認します。
- 不足しているツールやライブラリがあれば、そのインストール方法（`sudo apt install` や `pip install` コマンド）を具体的に提示します。

## 使用方法
このスクリプトは、Python仮想環境をアクティベートした状態で実行することを想定しています。

```bash
source /home/hirosi/paper_to_video_creator/backend/.venv/bin/activate \
&& python /home/hirosi/.gemini/tools/environment_readiness_checker.py
```

## 備考
- システムコマンドのインストールには`sudo`権限が必要です。提示されたコマンドはユーザーが手動で実行する必要があります。
- Pythonパッケージのチェックは、スクリプトが実行されている仮想環境に対して行われます。

```