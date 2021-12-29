<p align="center">

<h3 align="center">Mundana Blog Template</h3>

<div align="center">
  
![Status](https://img.shields.io/badge/status-active-success.svg)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/GeremiRM/Mundana-Blog-Template/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Configuration](#configuration)
- [Usage](#usage)
- [Built Using](#built_using)
- [Author](#author)

## 🧐 About <a name = "about"></a>

Contentful template made with Next.js

# 🏁 Getting Started <a name = "getting_started"></a>

Run the development server:

```
  npm install

  npm run dev
```

<br />

## <a name ="configuration"> Configuration </a>

<br />

This template utilizes two content types:

### Author type:

- `name` - **Text** field (type **short text**)
- `slug` - **Text** field (type **slug**, appearance **slug**)
- `avatar` - **media** field (type **one file**)
- `bio` - **Text** field (type **short text**)

<br />

### Post type:

- `title` - **Text** field (type **short text**)
- `slug` - **Text** field (type **slug**, appearance **slug**)
- description - **Text** field (type **short text**)
- `category` - **Text** field (type **short text**)
- `author` - **reference** field (type **author**)
- `content` - **Text** field (type **rich text**)
- `featuredImage` - **media** field (type **one file**)

You can also add more fields if you wish. If you do add more fields, remember to modify the `types.ts` with the name and type of said fields.

EX:

`types/types.ts`

```
export interface AuthorFields {
  ...
  age: number;
}


```

(Keep in mind however that, unless you modify it, the template needs **at least** the fields already mentioned)

<br />

### Enviroment variables

Create a `.env.local` file and inside it set the following variables:

- `NEXT_PUBLIC_CONTENTFUL_SPACE_ID` should be the **Space ID** field of your API key
- `NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN` should be the acces token field of your api key

In the end your `env.local` file should like this:
<br />

```bash
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID=...
  NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=...
```

<br />

## 🎈 Usage <a name="usage"></a>

If everything has been set correctly, you should be able to run by using:

```
  npm install
  npm run rev
```

<br />

## ⛏️ Built Using <a name = "built_using"></a>

- [Next.js](https://nextjs.org/) - Front-End Framework
- [Contentful](https://expressjs.com/) - Content Manager
- [Sass](https://sass-lang.com/) - CSS Preprocessor

<br />

## ✍️ Author <a name = "author"></a>

[@Geremirm](https://github.com/GeremiRM)
