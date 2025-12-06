
# 仕様書テンプレートジェネレーター (spec_template_generator.py)

## 目的
AI（Gemini CLI）が理解しやすく、人間が記入しやすい標準化された仕様書テンプレートを生成します。これにより、AIがドクターひろしの知識を効率的に蓄積し、活用できるようにします。

## 機能
- 標準的なMarkdown形式の仕様書テンプレートを、指定されたファイル名で生成します。
- テンプレートには、目的、機能、使用方法、入力、出力、備考、変更履歴などのセクションが含まれます。

## 使用方法
このスクリプトは、出力ファイルパスを引数として実行します。

```bash
python3 /home/hirosi/.gemini/tools/spec_template_generator.py <output_file_path>
```

### 例
新しいツールの仕様書テンプレートを `my_new_tool_spec.md` として生成する場合：
```bash
python3 /home/hirosi/.gemini/tools/spec_template_generator.py /home/hirosi/my_new_tool_spec.md
```

## 入力
- `<output_file_path>`: 生成する仕様書テンプレートのファイルパス（必須）。

## 出力
- 指定されたパスに、Markdown形式の仕様書テンプレートファイルが生成されます。

## 備考
- 生成されたテンプレートに、ツールの詳細情報を記入してください。
- 記入された仕様書は、AIが `search_file_content` や `read_file` ツールを使って検索・要約し、作業に活用します。
