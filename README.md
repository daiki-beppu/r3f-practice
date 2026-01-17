# R3F Practice

React Three Fiber (R3F) を使った3Dグラフィックスの練習プロジェクトです。

## 技術スタック

- **React 19** - UI フレームワーク
- **React Three Fiber (R3F)** - Three.js の React レンダラー
- **Three.js** - 3D グラフィックスライブラリ
- **TypeScript 5.9** - 型安全性（strict mode 有効）
- **Vite 7** - ビルドツール・開発サーバー
- **Tailwind CSS v4** - スタイリング
- **Bun** - パッケージマネージャー・ランタイム
- **Ultracite** - コード品質ツール（Oxlint + Oxfmt）

## セットアップ

```bash
# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev
```

## 開発コマンド

- `bun run dev` - 開発サーバーを起動
- `bun run build` - プロダクションビルドを作成
- `bun run preview` - ビルドしたアプリケーションをプレビュー
- `bun run fix` - Ultracite でコードを自動修正（型チェック付き）
- `bun run check` - Ultracite でコードをチェック

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
