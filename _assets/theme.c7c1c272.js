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
  }, /* @__PURE__ */ createElement("h1", null, `Theme customization`), /* @__PURE__ */ createElement("p", null, `vite-pages provides only one theme API: `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `. It should export an object contains these `, /* @__PURE__ */ createElement("strong", {
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
`)), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `These render functions should be pure.`)), /* @__PURE__ */ createElement("p", null, `Vite-pages collects data from your project and pass them to these render functions. You can learn about the "data" received by the render functions in `, /* @__PURE__ */ createElement(Link, {
    to: "/page-data",
    mdxType: "Link"
  }, `page-data doc`), `.`), /* @__PURE__ */ createElement("p", null, `For example:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { ITheme } from 'vite-plugin-react-pages/client'

const theme: ITheme = {
  initialLoading(pageStaticData, pages) {
    return (
      <Layout sideMenuData={defaultMenu(pages)}>
        <p>Loading....</p>
      </Layout>
    )
  },
  loaded(pageData, pages) {
    const Component = pageData.default
    return (
      <Layout sideMenuData={defaultMenu(pages)}>
        <Component />
      </Layout>
    )
  },
  loadError(error, pageStaticData, pages) {
    console.error('load error!', error, pageStaticData, pages)
    return (
      <Layout sideMenuData={defaultMenu(pages)}>
        <p>Load error, see console.error</p>
      </Layout>
    )
  },
}

export default theme
`)), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `Here is a pite pages theme example: `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/packages/theme-basic/src/index.tsx"
    }
  }, `vite-pages-theme-basic`), `. `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/use-theme/pages/_theme.tsx"
    }
  }, `This fixture`), ` demonstrate how to use it.`)), /* @__PURE__ */ createElement("p", null, `You can customize every bit of UI with these render functions. Welcome to share your theme with a npm package!`), /* @__PURE__ */ createElement("h2", null, `Nearest theme config wins`), /* @__PURE__ */ createElement("p", null, `You can have multiple `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), ` in the pages directory. For each page file, vite-pages will find-up the nearest `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `. And use it to render the page layout.`), /* @__PURE__ */ createElement("h2", null, `Suggestions`), /* @__PURE__ */ createElement("h3", null, `To theme providers: make your theme easier to use`), /* @__PURE__ */ createElement("p", null, `We encourage theme providers to export your theme as `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `a config function`), ` that receive user config and return `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `ITheme`), `.`), /* @__PURE__ */ createElement("p", null, `For example, the theme provider can export theme as this function:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `export function createTheme({ sideMenuData }): ITheme {
  return {
    initialLoading(pageStaticData, pages) {
      return (
        <Layout sideMenuData={sideMenuData}>
          <p>Loading....</p>
        </Layout>
      )
    },
    loaded(pageData, pages) {
      const Component = pageData.default
      return (
        <Layout sideMenuData={sideMenuData}>
          <Component />
        </Layout>
      )
    },
    loadError(error, pageStaticData, pages) {
      console.error('load error!', error, pageStaticData, pages)
      return (
        <Layout sideMenuData={sideMenuData}>
          <p>Load error, see console.error</p>
        </Layout>
      )
    },
  }
}
`)), /* @__PURE__ */ createElement("p", null, `Theme consumer can use it multiple times to make different sideMenu in different pages:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// Configure sideMenu for \`/guides/*\` in \`/guides/_theme.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme([
  { path: '/guides/guide1', label: 'guide1' },
  { path: '/guides/guide2', label: 'guide1' },
])

// Configure sideMenu for \`/references/*\` in \`/references/_theme.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme([
  { path: '/references/ref1', label: 'ref1' },
  { path: '/references/ref2', label: 'ref2' },
])
`)), /* @__PURE__ */ createElement("p", null, `As you can see, the theme is easier to use because `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `consumers don't need to know about the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "strong"
  }, `_theme.tsx`), ` API and `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "strong"
  }, `ITheme`)), `. For this reason, we encourage theme providers to export config function like the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above.`), /* @__PURE__ */ createElement("h3", null, `To theme consumers: config composition is just function composition`), /* @__PURE__ */ createElement("p", null, `If your are a theme consumer, you can also create higher order functions to reuse config. For example, given the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above, theme consumers can create this function:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// provide some config that applied to whole site
// \`/with-site-config.tsx\`:
import createTheme from 'theme-pkg'
// the "index menu item" is a site-wise config
export default (pageMenu) =>
  createTheme([{ path: '/site-index', label: 'index' }, ...pageMenu])

// add some config that is only applied to \`/guides/*\`
// \`/guides/_theme.tsx\`:
import withSiteConfig from '../with-site-config'
export default withSiteConfig([
  { path: '/guides/guide1', label: 'guide1' },
  { path: '/guides/guide2', label: 'guide1' },
])

// add some config that is only applied to \`/references/*\`
// \`/references/_theme.tsx\`:
import withSiteConfig from '../with-site-config'
export default withSiteConfig([
  { path: '/references/ref1', label: 'ref1' },
  { path: '/references/ref2', label: 'ref2' },
])
`)), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `Config composition is just function composition`), `. There is no magic here. They are just simple import/export and function composition. vite-pages doesn't care how you get the render function, as long as you export the render functions in `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `.`), /* @__PURE__ */ createElement("h3", null, `Why design this config API?`), /* @__PURE__ */ createElement("h4", null, `Composable`), /* @__PURE__ */ createElement("p", null, `It utilize the functional power from JavaScript, making theme config highly composable. Users can share their theme through npm packages.`), /* @__PURE__ */ createElement("h4", null, `Releases the power of Typescript`), /* @__PURE__ */ createElement("p", null, `Users can get Typescript type-check and intelliSense when they are writing these kind of config code. In comparison, `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `most frameworks out there can't utilize the power of Typescript, because their config is too "dynamic" to be type-checked`), `.`), /* @__PURE__ */ createElement("h2", null, `Caveat`), /* @__PURE__ */ createElement("p", null, `React will re-mount the component if the vdom tree hierarchy changes (.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<Layout />`), ` -> `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<div><Layout /></div>`), `). If you want to retain the Layout component (.e.g so that the SideMenu scroll state won't get reset), your theme should render the Layout component in the "same position".`), /* @__PURE__ */ createElement("p", null, `The props of the component can change as you like and React will not re-mount it. Themes should take advantage of this property to make Layout behave differently across different pages.`));
}
MDXContent.isMDXComponent = true;

var theme$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { theme$ as pageData };
