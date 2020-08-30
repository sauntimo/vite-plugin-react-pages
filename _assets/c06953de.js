let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import {c as createElement, L as Link} from "./d2371593.js";
import {M as MDXContent$1} from "./505ffbee.js";
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
  }, /* @__PURE__ */ createElement("h1", null, `Page data`), /* @__PURE__ */ createElement("p", null, `Essentially, vite-pages is a React app framework that collect your pages data and pass them to your theme. So what kinds of data does it collect?`), /* @__PURE__ */ createElement("p", null, `Each page consists of two kinds of data:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Static data`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Runtime data`)), /* @__PURE__ */ createElement("p", null, `Both of these page data are passed to the theme so that it can render the app.`), /* @__PURE__ */ createElement("h2", null, `Static data`), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `.tsx|.jsx`), ` pages, you can define static data with `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `a docblock(comment) at the top of the file`), `.`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `/**
 * @title index page
 * @tags tag1,tag2
 */
`)), /* @__PURE__ */ createElement("p", null, `This will be collected as:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "index page", "tags": "tag1,tag2" }
`)), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `.md|.mdx`), ` pages, you can define static data with YAML front matter:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-md"
    }
  }, `---
title: my page
tags:
  - tag1
  - tag2
---
`)), /* @__PURE__ */ createElement("p", null, `This will be collected as:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "my page", "tags": ["tag1", "tag2"] }
`)), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `As you can see, YAML front matter can express some simple data structure(.e.g array), while a docblock's properties can only express strings. A qualified theme should understand both of these static data.`)), /* @__PURE__ */ createElement("h2", null, `Runtime data`), /* @__PURE__ */ createElement("p", null, `Runtime page data is just anything you export from a page file.`), /* @__PURE__ */ createElement("h2", null, `Difference`), /* @__PURE__ */ createElement("p", null, `Both static data and runtime data will be passed to the theme, so the theme can use them to render the view.`), /* @__PURE__ */ createElement("p", null, `Difference:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Static data of `, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `all pages`), ` is loaded `, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `eagerly`), ` when the app bootstrap. So you should try to keep the static data small.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Runtime data is only loaded when user navigate to that page.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `The value type of static data is limited (string or simple object/array), while the value of runtime data can be any javascript value (.e.g a React component).`)), /* @__PURE__ */ createElement("h2", null, `How theme consume these data`), /* @__PURE__ */ createElement("p", null, `As stated in `, /* @__PURE__ */ createElement(Link, {
    to: "/theme-customization",
    mdxType: "Link"
  }, `the theme customization doc`), `, a theme is a React compoent. It will be rendered by vite-pages core, and get useful info from props:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `All pages' static data`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `All runtime data that is already loaded`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `The current loading state of the app`)), /* @__PURE__ */ createElement("p", null, `Here is the interface of a theme:`), /* @__PURE__ */ createElement(MDXContent$1, {
    mdxType: "ThemeInterface"
  }), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `Here is an example implementation of vite-pages theme: `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/packages/theme-basic/src/index.tsx"
    }
  }, `vite-pages-theme-basic`), `. `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/use-theme/pages/_theme.tsx"
    }
  }, `This fixture`), ` demonstrate how to use it.`)), /* @__PURE__ */ createElement("h2", null, `Vite-pages core doesn't care what your page data looks like`), /* @__PURE__ */ createElement("p", null, `Vite-pages itself doesn't care what the page data looks like. How to interpret the page data and render the view, is totally decided by `, /* @__PURE__ */ createElement(Link, {
    to: "/theme-customization",
    mdxType: "Link"
  }, `the theme`), `. Vite-pages just collect your pages data and pass them to the theme. This design make the vite-pages core more "simple" and make themes more powerful.`), /* @__PURE__ */ createElement("p", null, `Most themes ask users to `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files(.e.g `, /* @__PURE__ */ createElement(Link, {
    to: "/basic-theme",
    mdxType: "Link"
  }, `the basic theme`), `). But that is not a requirement from vite-pages core.`));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
