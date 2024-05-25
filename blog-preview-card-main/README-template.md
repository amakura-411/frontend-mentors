# CHALLENGE NAME

## チャレンジ内容

ユーザーは次のことができるようにする必要があります：

ページ上のすべてのインタラクティブ要素に対してホバーとフォーカスの状態を確認するスクリーンショット

## リンク

[ソリューションの URL(PULL REQUEST)](https://github.com/amakura-411/frontend-mentors/pull/5)

[ライブサイトの URL](https://amakura-411.github.io/frontend-mentors/blog-preview-card-main/)

## 私のプロセス

### 使用技術

- HTML
- CSS
  - [box-shadow](https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow)

### 学んだこと

このプロジェクトを通じて学んだ主な内容は次のとおりです：

- `box-shadow` プロパティを使用して、要素に影を追加する方法

```css
box-shadow: 0 0 10px 0 black;
```

box-shadow プロパティは、次の 5 つの値を取ります：

box-shadow: offset-x offset-y blur-radius spread-radius color;

- `offset-x` は影の水平方向の位置を指定します。
- `offset-y` は影の垂直方向の位置を指定します。
- `blur-radius` は影のぼかしの量を指定します。
- `spread-radius` は影の拡大または縮小を指定します。
- `color` は影の色を指定します。

右下に影を追加する場合、`offset-x` と `offset-y` に正の値を指定します。左上に影を追加する場合、`offset-x` と `offset-y` に負の値を指定します。

全てに影を追加する場合、`offset-x` と `offset-y` に 0 を指定します。

## 今後の開発

今後のプロジェクトで重点を置きたい領域は以下のとおりです：

- css 設計の理解
- レスポンシブデザインの理解
- HTML 構造の理解（class 名など）
- JavaScript / TypeScript の理解

## 便利なリソース

[MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow)

[px 変換ツール。px、pt、em、rem、パーセント](https://hp-html.jp/px/px_do.php)
