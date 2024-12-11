# プロジェクト概要

このプロジェクトは、ポケモンの情報を表示するウェブアプリケーションです。ユーザーはポケモンのリストを閲覧し、詳細情報を確認することができます。

## 主なディレクトリとファイル

### [`app/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fapp%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/app/")

- `api/`: APIエンドポイントの実装
  - [`app/api/pokemon/[id]/route.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fapp%2Fapi%2Fpokemon%2F%5Bid%5D%2Froute.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/app/api/pokemon/[id]/route.ts"): ポケモンの詳細情報を取得するAPIエンドポイント

- `globals.css`: グローバルスタイルシート
- `layout.tsx`: アプリケーションのレイアウトコンポーネント
- `not-found.tsx`: 404ページ
- `page.tsx`: メインページ
- `pokemon/`: ポケモン関連のページ

### [`components/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fcomponents%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/components/")

- `pokemon-card.tsx`: ポケモンカードコンポーネント
- `pokemon-detail.tsx`: ポケモン詳細コンポーネント
- `pokemon-list.tsx`: ポケモンリストコンポーネント
- `ui/`: UIコンポーネント
  - [`use-toast.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fcomponents%2Fui%2Fuse-toast.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/components/ui/use-toast.ts"): トースト通知のフック

### [`lib/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Flib%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/lib/")

- `pokemon.ts`: ポケモン関連のユーティリティ関数とAPI呼び出し
- `config.ts`: 設定ファイル

### [`public/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fpublic%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/public/")

- 公開用の静的ファイル

### [`tailwind.config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Ftailwind.config.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/tailwind.config.ts")

- Tailwind CSSの設定ファイル

### [`tsconfig.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Ftsconfig.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/tsconfig.json")

- TypeScriptの設定ファイル

## 主な機能

### ポケモンリスト

ポケモンリストは、[`components/pokemon-list.tsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fcomponents%2Fpokemon-list.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/components/pokemon-list.tsx")で実装されています。ユーザーはポケモンを検索したり、タイプでフィルタリングしたりすることができます。

### ポケモン詳細

ポケモンの詳細情報は、[`components/pokemon-detail.tsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fcomponents%2Fpokemon-detail.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/components/pokemon-detail.tsx")で表示されます。

### トースト通知

トースト通知は、[`components/ui/use-toast.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fcomponents%2Fui%2Fuse-toast.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/components/ui/use-toast.ts")で実装されています。ユーザーに通知を表示するために使用されます。

## APIエンドポイント

### ポケモン詳細情報取得

- エンドポイント: `/api/pokemon/[id]`
- 実装: [`app/api/pokemon/[id]/route.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Fapp%2Fapi%2Fpokemon%2F%5Bid%5D%2Froute.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/app/api/pokemon/[id]/route.ts")
- 説明: 指定されたIDのポケモンの詳細情報を取得します。

## 設定

### [`lib/config.ts`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fshoma.endo%2Fprivate%2Fpok-mon-pictorial-book%2Flib%2Fconfig.ts%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2211f89f7f-dfdd-481d-914e-e44a58737d5d%22%5D "/Users/shoma.endo/private/pok-mon-pictorial-book/lib/config.ts")

- `POKEMON_API_BASE_URL`: ポケモンAPIのベースURL
- `BATCH_SIZE`: 一度に取得するポケモンの数
- `POKEMON_LIMIT`: ポケモンの総数

## 開発

### ビルド

プロジェクトをビルドするには、以下のコマンドを実行します。

```sh
npm run build