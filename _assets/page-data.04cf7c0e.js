import { L as Link } from './clientRender.5652f81f.js';
import { c as createElement } from './esm.cbe2cc77.js';

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
  }, /* @__PURE__ */ createElement("h1", null, `Page data`), /* @__PURE__ */ createElement("h2", null, `Static page metadata`), /* @__PURE__ */ createElement("p", null, `For `, /* @__PURE__ */ createElement("inlineCode", {
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
`)), /* @__PURE__ */ createElement("p", null, `This will be resolved into:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
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
`)), /* @__PURE__ */ createElement("p", null, `This will be resolved into:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "my page", "tags": ["tag1", "tag2"] }
`)), /* @__PURE__ */ createElement("h2", null, `Runtime page data`), /* @__PURE__ */ createElement("p", null, `Runtime page data is just anything you export from a page file.`), /* @__PURE__ */ createElement("h2", null, `Difference`), /* @__PURE__ */ createElement("p", null, `Both static data and runtime data will be passed to `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.js`), `, so the theme can use them to render layout.`), /* @__PURE__ */ createElement("p", null, `Difference:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Static data of `, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `all pages`), ` is loaded when the app bootstrap. So you should try to keep the static data small.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Runtime data is only loaded when user navigate to that page.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `The value type of static data is limited (string or simple object/array), while the value of runtime data can be any javascript value (.e.g a React component).`)), /* @__PURE__ */ createElement("h2", null, `How to consume these data`), /* @__PURE__ */ createElement("p", null, `As stated in the `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `theme doc`), `, `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), ` should export an object contains these `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `render functions`), `:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `interface ITheme {
  /**
   * loading the first page's data, render the initial loading state.
   * if the app is build with ssr,
   * vite-pages will not use it to render the initial loading state.
   *
   * @param pageStaticData current page's static data.
   * @param pages all page's static data.
   */
  initialLoading: (
    pageStaticData: any,
    pages: IPages
  ) => React.ReactElement | null
  /**
   * current page's data is ready, render the page content.
   *
   * @param pageData current page's data. including static data and runtime data.
   * @param pages all page's static data.
   */
  loaded: (pageData: IPageLoaded, pages: IPages) => React.ReactElement | null
  /**
   * app is loading another page, render the transition loading state.
   * if transitionLoading is not provided, vite-pages will fallback to initialLoading.
   *
   * @param pageStaticData current page's static data.
   * @param pages all page's static data.
   * @param prevPageData previous page's data.
   */
  transitionLoading?: (
    pageStaticData: any,
    pages: IPages,
    prevPageData: IPageLoaded
  ) => React.ReactElement | null
  /**
   * If error happens while loading,
   * vite-pages will use it to render the error state.
   *
   * @param error the error.
   * @param pageStaticData current page's static data.
   * @param pages all page's static data.
   */
  loadError: (
    error: any,
    pageStaticData: any,
    pages: IPages
  ) => React.ReactElement | null
}
`)), /* @__PURE__ */ createElement("p", null, `The `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `pageData`), ` contains:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `{
  ...pageStaticData, // static data of current page
  _path: '/page/path',
  ...pageRuntimeData, // runtime data of current page
}
`)), /* @__PURE__ */ createElement("p", null, `The `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `pages`), ` provides the `, /* @__PURE__ */ createElement("strong", {
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
`)), /* @__PURE__ */ createElement("h2", null, `vite-pages core doesn't care about your page data`), /* @__PURE__ */ createElement("p", null, `vite-pages itself doesn't care about your page data structure. How to interpret the page data, is totally decided by `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `your theme`), `. This design make the vite-pages core more "simple" and make themes more powerful.`), /* @__PURE__ */ createElement("p", null, `Most themes ask users to `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files. But that is not a requirement from vite-pages core.`), /* @__PURE__ */ createElement("p", null, `If you are a theme user, you should read the doc of your theme to learn what data should be exposed by your pages.`));
}
MDXContent.isMDXComponent = true;

var pageData$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { pageData$ as pageData };
