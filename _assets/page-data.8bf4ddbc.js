import { L as Link } from './clientRender.add4902f.js';
import { c as createElement } from './esm.c176b8b7.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Page data`), createElement("h2", null, `Static page metadata`), createElement("p", null, `For `, createElement("inlineCode", {
    parentName: "p"
  }, `.tsx|.jsx`), ` pages, you can define static data with `, createElement("strong", {
    parentName: "p"
  }, `comment at the top of the file`), `.`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `/**
 * @title index page
 * @tags tag1,tag2
 */
`)), createElement("p", null, `This will be resolved into:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "index page", "tags": "tag1,tag2" }
`)), createElement("p", null, `For `, createElement("inlineCode", {
    parentName: "p"
  }, `.md|.mdx`), ` pages, you can define static data with YAML front matter:`), createElement("pre", null, createElement("code", {
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
`)), createElement("p", null, `This will be resolved into:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-json"
    }
  }, `{ "title": "my page", "tags": ["tag1", "tag2"] }
`)), createElement("h2", null, `Runtime page data`), createElement("p", null, `Runtime page data is just anything you export from a page file.`), createElement("h2", null, `Difference`), createElement("p", null, `Both static data and runtime data will be passed to `, createElement("inlineCode", {
    parentName: "p"
  }, `_theme.js`), `, so the theme can use them to render layout.`), createElement("p", null, `Difference:`), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, `Static data of `, createElement("strong", {
    parentName: "li"
  }, `all pages`), ` is loaded when the app bootstrap. So you should try to keep the static data small.`), createElement("li", {
    parentName: "ul"
  }, `Runtime data is only loaded when user navigate to that page.`), createElement("li", {
    parentName: "ul"
  }, `The value type of static data is limited (string or simple object/array), while the value of runtime data can be any javascript value (.e.g a React component).`)), createElement("h2", null, `How to consume these data`), createElement("p", null, `As stated in the `, createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `theme doc`), `, `, createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), ` should export an object contains these `, createElement("strong", {
    parentName: "p"
  }, `render functions`), `:`), createElement("pre", null, createElement("code", {
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
`)), createElement("p", null, `The `, createElement("inlineCode", {
    parentName: "p"
  }, `pageData`), ` contains:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `{
  ...pageStaticData, // static data of current page
  _path: '/page/path',
  ...pageRuntimeData, // runtime data of current page
}
`)), createElement("p", null, `The `, createElement("inlineCode", {
    parentName: "p"
  }, `pages`), ` provides the `, createElement("strong", {
    parentName: "p"
  }, `static data of all pages`), `:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `interface IPages {
  [path: string]: {
    staticData: any
  }
}
`)), createElement("h2", null, `vite-pages core doesn't care about your page data`), createElement("p", null, `vite-pages itself doesn't care about your page data structure. How to interpret the page data, is totally decided by `, createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `your theme`), `. This design make the vite-pages core more "simple" and make themes more powerful.`), createElement("p", null, `Most themes ask users to `, createElement("inlineCode", {
    parentName: "p"
  }, `export default`), ` a React component from page files. But that is not a requirement from vite-pages core.`), createElement("p", null, `If you are a theme user, you should read the doc of your theme to learn what data should be exposed by your pages.`));
}
MDXContent.isMDXComponent = true;

var pageData$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { pageData$ as pageData };
