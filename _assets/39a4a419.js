let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import {c as createElement, L as Link} from "./d2371593.js";
const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return /* @__PURE__ */ createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, /* @__PURE__ */ createElement("h1", null, `Basic theme`), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `vite-pages-theme-basic`), ` provides a nice theme. It should satisfy most users' needs. As an example, this document site is powered by this theme.`), /* @__PURE__ */ createElement("h2", null, `How to use`), /* @__PURE__ */ createElement("p", null, `You should config the theme in `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// _theme.tsx
import React from 'react'
import { createTheme } from 'vite-pages-theme-basic'

export default createTheme({
  topNavs: [
    { text: 'index', path: '/' },
    { text: 'Vite', href: 'https://github.com/vitejs/vite' },
  ],
  logo: 'Vite Pages',
  // Other configs...
})
`)), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/tree/master/fixtures/use-theme"
    }
  }, `Here is a complete example`), `.`), /* @__PURE__ */ createElement("h2", null, `Auto menu generation`), /* @__PURE__ */ createElement("p", null, `Basic theme can generation a side navigation menu automatically, based on the pages information.`), /* @__PURE__ */ createElement("p", null, `You can control the label and sorting of the nav menu, by notating these `, /* @__PURE__ */ createElement("em", {
    parentName: "p"
  }, `page static data`), `:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `title`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `sort (default value is 1)`)), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `markdown pages`), `, notate the static data like this:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-text"
    }
  }, `---
title: Basic Theme
sort: 0.5
---

markdown content...
`)), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `jsx/tsx pages`), `, notate the static data like this:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-js"
    }
  }, `/**
 * @title page1 title
 * @sort 1
 */

// js code....
`)), /* @__PURE__ */ createElement("h2", null, `Page search`), /* @__PURE__ */ createElement("p", null, `Basic theme also generate a search box automatically. It help readers to filter pages by their titles. As an example, you can find the search box at the topbar of this document site.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `You can turn of the auto-generated search box in the theme configs. You can also customize the topbar options area.`)), /* @__PURE__ */ createElement("h2", null, `Theme configs`), /* @__PURE__ */ createElement("p", null, `The `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` exported by `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `vite-pages-theme-basic`), ` accepts these options:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `interface IOption {
  /**
   * Take fully control of side nav menu.
   */
  sideMenuData?: ISideMenuData[]
  /**
   * Navigation menu at top bar.
   */
  topNavs?: ITopNavData[]
  /**
   * Logo area at top bar.
   */
  logo?: React.ReactNode
  /**
   * Operation area at top bar.
   */
  topbarOperations?: React.ReactNode
  /**
   * Footer area.
   */
  footer?: React.ReactNode
  /**
   * Enable search.
   * @default true
   */
  search?: boolean
}

export type ISideMenuData = { text: string; path: string }

export type ITopNavData =
  | {
      text: string
      /**
       * The url.
       * @example 'https://www.google.com/'
       */
      href: string
    }
  | {
      text: string
      /**
       * The path in the current webapp.
       * @example '/posts/hello-world'
       */
      path: string
    }
`)), /* @__PURE__ */ createElement("h2", null, `Fully theme customization`), /* @__PURE__ */ createElement("p", null, `If the basic theme doesn't satisfy your need, you can `, /* @__PURE__ */ createElement(Link, {
    to: "/theme-customization",
    mdxType: "Link"
  }, `create your own theme`), `.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `Contributions to `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/tree/master/packages/theme-basic"
    }
  }, `the basic theme`), ` are always welcomed.`)));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
