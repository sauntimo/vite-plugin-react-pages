let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = "";document.head.appendChild(__VITE_CSS__);import { c as createElement, L as Link } from './clientRender.48cd363d.js';
import { M as MDXContent$1 } from './theme-interface.9593c16a.js';

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
  }, /* @__PURE__ */ createElement("h1", null, `Page data`), /* @__PURE__ */ createElement("p", null, `Vite-pages is a React app framework that collect your pages data and pass them to your theme. So what kinds of data does it collect?`), /* @__PURE__ */ createElement("p", null, `There are two kinds of data:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Static page metadata`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Runtime page data`)), /* @__PURE__ */ createElement("h2", null, `Static page metadata`), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `.tsx|.jsx`), ` pages, you can define static data with `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `comment at the top of the file`), `.`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
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
`)), /* @__PURE__ */ createElement("h2", null, `Runtime page data`), /* @__PURE__ */ createElement("p", null, `Runtime page data is just anything you export from a page file.`), /* @__PURE__ */ createElement("h2", null, `Difference`), /* @__PURE__ */ createElement("p", null, `Both static data and runtime data will be passed to the theme, so the theme can use them to render the view.`), /* @__PURE__ */ createElement("p", null, `Difference:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Static data of `, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `all pages`), ` is loaded eagerly when the app bootstrap. So you should try to keep the static data small.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Runtime data is only loaded when user navigate to that page.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `The value type of static data is limited (string or simple object/array), while the value of runtime data can be any javascript value (.e.g a React component).`)), /* @__PURE__ */ createElement("h2", null, `How theme consume these data`), /* @__PURE__ */ createElement("p", null, `As stated in `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `the theme doc`), `, a theme contains these `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `render functions`), `:`), /* @__PURE__ */ createElement(MDXContent$1, {
    mdxType: "ThemeInterface"
  }), /* @__PURE__ */ createElement("p", null, `When the init function is called, the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `IPages`), ` provides the `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `static data of all pages`), `:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `interface IPages {
  [path: string]: {
    staticData: any
  }
}
`)), /* @__PURE__ */ createElement("p", null, `When the page is loading, only static data is available.`), /* @__PURE__ */ createElement("p", null, `When the page is loaded, the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `IPageLoaded`), ` contains both static data and runtime data:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `{
  ...pageStaticData, // static data of current page
  ...pageRuntimeData, // runtime data of current page
  _path: '/page/path',
}
`)), /* @__PURE__ */ createElement("h2", null, `Vite-pages core doesn't care about your page data`), /* @__PURE__ */ createElement("p", null, `Vite-pages itself doesn't care what the page data looks like. How to interpret the page data, is totally decided by `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `your theme`), `. This design make the vite-pages core more "simple" and make themes more powerful.`), /* @__PURE__ */ createElement("p", null, `Most themes ask users to `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files. But that is not a requirement from vite-pages core.`), /* @__PURE__ */ createElement("p", null, `If you are a theme user, you should read the doc of your theme to learn what data should be exported from your pages.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `Here is an example vite-pages theme implementation: `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/packages/theme-basic/src/index.tsx"
    }
  }, `vite-pages-theme-basic`), `. `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/use-theme/pages/_theme.tsx"
    }
  }, `This fixture`), ` demonstrate how to use it.`)));
}
MDXContent.isMDXComponent = true;

export default MDXContent;
