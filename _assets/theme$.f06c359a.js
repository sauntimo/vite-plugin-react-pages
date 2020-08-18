let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import "./source.development.988405bf.js";
import "./react-router.7eae1728.js";
import {L as Link} from "./react-router-dom.c434f558.js";
import {c as createElement} from "./esm.2198c540.js";
import {M as MDXContent$1} from "./theme-interface.7b255cb0.js";
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
  }, /* @__PURE__ */ createElement("h1", null, `Theme customization`), /* @__PURE__ */ createElement("p", null, `Vite-pages itself doesn't render any concrete DOM node. You can customize `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `anything`), ` on the page with theme. That's why theme is so powerful.`), /* @__PURE__ */ createElement("p", null, `Users should export their theme from `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `_theme.tsx`), `. It should export a theme-init-function:`), /* @__PURE__ */ createElement(MDXContent$1, {
    mdxType: "ThemeInterface"
  }), /* @__PURE__ */ createElement("p", null, `Vite-pages collects data from your project and call the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `ICreateTheme`), ` function to init your theme. Then, it will call the render functions from the theme. These render functions should be pure.`), /* @__PURE__ */ createElement("p", null, `You can learn about the "data" received by the render functions in `, /* @__PURE__ */ createElement(Link, {
    to: "/page-data",
    mdxType: "Link"
  }, `page-data doc`), `.`), /* @__PURE__ */ createElement("p", null, `For example, a simple theme looks like this:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { ICreateTheme, IPages } from 'vite-plugin-react-pages'

const topNavs = [
  { text: 'index', path: '/' },
  { text: 'React', href: 'https://reactjs.org/' },
  { text: 'Vite', href: 'https://github.com/vitejs/vite' },
]

const theme: ICreateTheme = (pages) => {
  // You can create side menu based on pages data
  // const sideMenuData = defaultMenu(pages)
  return {
    loaded(pageData) {
      const Component = pageData.default
      return (
        <Layout topNavs={topNavs} logo="Vite Pages Basic Demo">
          <Component />
        </Layout>
      )
    },
  }
}

export default theme
`)), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
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
  }, `This fixture`), ` demonstrate how to use it.`)), /* @__PURE__ */ createElement("p", null, `You can customize every bit of UI with theme. Welcome to share your theme with a npm package!`), /* @__PURE__ */ createElement("h2", null, `Suggestions`), /* @__PURE__ */ createElement("h3", null, `To theme providers: make your theme easier to use`), /* @__PURE__ */ createElement("p", null, `We encourage theme providers to export your theme as `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `a config function`), ` that receive user config and return `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `ICreateTheme`), `.`), /* @__PURE__ */ createElement("p", null, `For example, the theme provider can export theme as this function:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `export function createTheme({ sideMenuData }: IOption = {}): ICreateTheme {
  return (pages) => {
    // theme can create menu from pages data
    const actualMenuData = sideMenuData || defaultMenu(pages)
    return {
      loaded(pageData) {
        const Component = pageData.default
        return (
          <Layout sideMenuData={actualMenuData}>
            <Component />
          </Layout>
        )
      },
    }
  }
}
`)), /* @__PURE__ */ createElement("p", null, `Theme consumers can use it to config their sideMenu:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `// Theme users can configure sideMenu in \`/_theme.tsx\`:
import createTheme from 'theme-pkg'
export default createTheme({
  sideMenuData: [
    { path: '/guides/guide1', label: 'guide1' },
    { path: '/guides/guide2', label: 'guide1' },
  ],
})
`)), /* @__PURE__ */ createElement("p", null, `As you can see, the theme is easier to use because `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `theme consumers don't need to know about the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "strong"
  }, `_theme.tsx`), ` API and `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "strong"
  }, `ITheme`), ` from vite-pages`), `. They only need to know about `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` API from the theme. Users should be talking to the theme, instead of talking directly to vite-pages framework.`), /* @__PURE__ */ createElement("p", null, `For this reason, we encourage theme providers to export config function like the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), ` above.`), /* @__PURE__ */ createElement("h4", null, `Releases the power of Typescript`), /* @__PURE__ */ createElement("p", null, `The above example show another benefit for users: theme users can get Typescript type-check and intelliSense when they are writing theme config. This is because users are talking to the theme, instead of talking directly to the vite-pages framework.`), /* @__PURE__ */ createElement("h2", null, `Caveat`), /* @__PURE__ */ createElement("p", null, `React will re-mount the component if the vdom tree hierarchy changes (.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<Layout />`), ` -> `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<div><Layout /></div>`), `). If you want to retain the Layout component (.e.g so that the SideMenu scroll state won't get reset), the theme render functions should put the Layout component at the "same position".`), /* @__PURE__ */ createElement("p", null, `The props of the component can change as you like and React will not re-mount it (.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<Layout prop="foo" />`), ` -> `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `<Layout prop="bar" />`), `). Themes should take advantage of this to make Layout behave differently across different pages.`), /* @__PURE__ */ createElement("h2", null, `Share your theme!`), /* @__PURE__ */ createElement("p", null, `It is easy to write a theme that is sharable and configurable. If you use typescript, the users of your theme will get type-check and intelliSense.`), /* @__PURE__ */ createElement("p", null, `If you have design and implement a theme(.e.g blog theme, document site theme), welcome to share your theme with a npm package, or contribute to `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/tree/master/packages"
    }
  }, `the vite-pages repo`), `!`));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
