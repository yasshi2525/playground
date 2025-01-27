![test](https://github.com/yasshi2525/playground/actions/workflows/test.yml/badge.svg?branch=main)
![deploy](https://github.com/yasshi2525/playground/actions/workflows/deploy.yml/badge.svg?branch=main)

# Akashic Playground

[Demo](https://yasshi2525.github.io/playground/#/presets/default)

# development

## build

```sh
npm run build
```

## watch build

```sh
npm run dev
```

## update engine

以下のコマンドで、エンジンの新しいバージョンを検出して取り込みます。

```sh
npm run update-engines # エンジンファイルの更新
```

その後、手動で以下のコマンドで akashic-engine の型定義ファイルを更新してください。
(akashic-engine の依存モジュールの型定義は以下のコマンド実行時点での最新に置き換わります)

```sh
node scripts/generate_akashic_definitions.js 3.0.4 # akashic-engine@3.0.4 の型定義を生成する場合
```

# deploy

以下のコマンドで gh-pages 上にデプロイできます。

```sh
npm run deploy
```

## ライセンス
本リポジトリは MIT License の元で公開されています。
詳しくは [LICENSE](./LICENSE) をご覧ください。

ただし、画像ファイルおよび音声ファイルは
[CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/) の元で公開されています。
