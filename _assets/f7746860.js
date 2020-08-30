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
  }, /* @__PURE__ */ createElement("h1", null, `Theme customization`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `This is an advance guide about how to make a theme by yourself. If there is already themes that meet your needs(.e.g `, /* @__PURE__ */ createElement(Link, {
    to: "/basic-theme",
    mdxType: "Link"
  }, `the basic theme`), `), you don't need to read this guide now!`)), /* @__PURE__ */ createElement("p", null, `Vite-pages itself doesn't render any concrete DOM node. Users can customize `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `anything`), ` on the page with theme. That's why theme is so powerful.`), /* @__PURE__ */ createElement("p", null, `To use a theme, users should export their theme from `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `. It should export a React compoent. It will be rendered by vite-pages core, and get useful info from props:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `All pages' static data`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `All runtime data that is already loaded`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `The current loading state of the app`)), /* @__PURE__ */ createElement("p", null, `Here is the interface of a theme:`), /* @__PURE__ */ createElement(MDXContent$1, {
    mdxType: "ThemeInterface"
  }), /* @__PURE__ */ createElement("p", null, `You can learn more about the "data" received by the render functions in `, /* @__PURE__ */ createElement(Link, {
    to: "/page-data",
    mdxType: "Link"
  }, `the page data doc`), `.`), /* @__PURE__ */ createElement("p", null, `This is probably `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/basic/pages/_theme.tsx"
    }
  }, `the simplest theme`), `:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React, { useMemo } from 'react'
import type { ITheme } from 'vite-plugin-react-pages'

const Theme: ITheme = ({ staticData, loadedData, loadState }) => {
  console.log('#Theme', staticData, loadedData, loadState)

  // You can generate side nav menu from staticData
  // const sideMenuData = useMemo(() => generateSideMenu(staticData), [staticData])

  if (loadState.type === '404') return <p>Page not found.</p>
  if (loadState.type === 'load-error') return <p>Load error!</p>
  if (loadState.type === 'loading') return <p>Loading...</p>

  // loadState.type === 'loaded'
  // Runtime page data for current page
  const pageData = loadedData[loadState.routePath]
  // the default export of the main module
  const Component = pageData.main.default
  return <Component />
}

export default Theme
`)), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `Here is a more useful theme: `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/packages/theme-basic/src/index.tsx"
    }
  }, `vite-pages-theme-basic`), `. `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/use-theme/pages/_theme.tsx"
    }
  }, `This fixture`), ` demonstrate how to use it.`)), /* @__PURE__ */ createElement("p", null, `You can customize every bits of UI with theme. Welcome to share your theme with a npm package!`), /* @__PURE__ */ createElement("h2", null, `Suggestions`), /* @__PURE__ */ createElement("h3", null, `To theme providers: make your theme easier to use`), /* @__PURE__ */ createElement("p", null, `We encourage theme providers to export your theme as `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `a config function`), ` that receive user config and return a `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `ITheme`), `.`), /* @__PURE__ */ createElement("p", null, `For example, the theme provider can export theme like this:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// The theme config function accepts navs config
export default function createTheme({ navs }: IOption = {}): ITheme {
  return ({ loadedData, loadState }) => {
    if (loadState.type !== 'loaded')
      return (
        <Layout navs={navs}>
          <p>Loading...</p>
        </Layout>
      )
    // Runtime page data for current page
    const pageData = loadedData[loadState.routePath]
    // the default export of the main module
    const Component = pageData.main.default
    return (
      <Layout navs={navs}>
        <Component />
      </Layout>
    )
  }
}
`)), /* @__PURE__ */ createElement("p", null, `Theme consumers can use it to config their navs menu:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// Theme users can configure sideMenu in \`/_theme.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme({
  navs: [
    { path: '/guides/guide1', label: 'guide1' },
    { path: '/guides/guide2', label: 'guide1' },
  ],
})
`)), /* @__PURE__ */ createElement("p", null, `As you can see, the theme is easier to use because `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `theme consumers don't need to know about the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "strong"
  }, `ITheme`), ` API from vite-pages`), `. They only need to know about `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` API from the theme. Users should be talking to the theme, instead of talking directly to vite-pages framework.`), /* @__PURE__ */ createElement("p", null, `For this reason, we encourage theme providers to export config function like the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above.`), /* @__PURE__ */ createElement("h4", null, `Releases the power of Typescript`), /* @__PURE__ */ createElement("p", null, `The above example show another benefit for users: theme users can get Typescript type-check and intelliSense when they are writing theme config. This is because users are calling the theme config function, instead of "exporting some configs".`), /* @__PURE__ */ createElement("h2", null, `Share your theme!`), /* @__PURE__ */ createElement("p", null, `It is easy to write a theme that is sharable and configurable.`), /* @__PURE__ */ createElement("p", null, `If you have design and implement a theme(.e.g a blog theme, a document site theme), welcome to share your theme with a npm package, or contribute it to `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/tree/master/packages"
    }
  }, `the vite-pages repo`), `!`));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
