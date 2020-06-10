import { L as Link } from './index.bd465366.js';
import { c as createElement } from './esm.44f9e862.js';
export { _ as renderPage } from './esm.44f9e862.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({components, ...props}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Theme customization`), createElement("p", null, `Vite pages provides only one theme API: `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), `.
`, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), ` should export a `, createElement("strong", {
    parentName: "p"
  }, `render function`), `: `, createElement("inlineCode", {
    parentName: "p"
  }, `(pageData: any, pages: IPages) => React.ReactElement`), `. For example:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { IRenderPage } from 'vite-plugin-react-pages/client'

const render: IRenderPage = (pageData, pages) => {
  const { default: PageComponent } = pageData
  return <Layout Content={PageComponent} pages={pages} />
}
export default render
`)), createElement("p", null, `We will explain the parameters of the render function in `, createElement(Link, {
    to: "/page-data",
    mdxType: "Link"
  }, `page-data doc`), `.`), createElement("blockquote", null, createElement("p", {
    parentName: "blockquote"
  }, `The render function should be pure.`)), createElement("p", null, `You can implement your theme in the Layout component. You can also import a render function from a npm package.`), createElement("h2", null, `Nearest theme config wins`), createElement("p", null, `You can have multiple `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), ` in the pages directory. For each page file. It will find-up the nearest `, createElement("inlineCode", {
    parentName: "p"
  }, `_render.tsx`), `. And use it to render the page layout.`), createElement("h2", null, `Suggestion: use higher order function to config theme`), createElement("p", null, `You can export your theme as a higher order function to make it more configurable.`), createElement("p", null, `For example, theme provider export theme as this function:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `import React from 'react'
import Layout from '../Layout'
import type { IRenderPage } from 'vite-plugin-react-pages/client'

export const createTheme = (sideMenuData): IRenderPage => {
  return (pageData, pages) => {
    return (
      <Layout
        Content={pageData.default}
        sideMenuData={sideMenuData ?? getDefaultMenuData(pages)}
      />
    )
  }
}
`)), createElement("p", null, `Theme consumer can use it multiple times to make different sideMenu in different pages.`), createElement("p", null, `Configure sideMenu for `, createElement("inlineCode", {
    parentName: "p"
  }, `/guides/*`), ` in `, createElement("inlineCode", {
    parentName: "p"
  }, `/guides/_render.tsx`), `:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `export default createTheme([
  { path: '/guides/guide1', label: 'guide1' },
  { path: '/guides/guide2', label: 'guide1' },
])
`)), createElement("p", null, `Configure sideMenu for `, createElement("inlineCode", {
    parentName: "p"
  }, `/references/*`), ` in `, createElement("inlineCode", {
    parentName: "p"
  }, `/references/_render.tsx`), `:`), createElement("pre", null, createElement("code", {
    parentName: "pre",
    ...{
      className: "language-tsx"
    }
  }, `export default createTheme([
  { path: '/references/ref1', label: 'ref1' },
  { path: '/references/ref2', label: 'ref2' },
])
`)), createElement("p", null, `We encourage theme providers to export config function like this `, createElement("inlineCode", {
    parentName: "p"
  }, `createTheme`), `, to make theme easier to use.`), createElement("h2", null, `Caveat`), createElement("p", null, `React will re-mount the component if the vdom tree hierarchy changes (.e.g `, createElement("inlineCode", {
    parentName: "p"
  }, `<Layout />`), ` -> `, createElement("inlineCode", {
    parentName: "p"
  }, `<div><Layout /></div>`), `). If you want to retain the Layout component (so that the SideMenu scroll state won't get reset), you should render the Layout component in the "same position".`), createElement("p", null, `The props of Layout component can change as you like. You can use that to make Layout component behave differently.`));
}
MDXContent.isMDXComponent = true;

var theme$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { theme$ as pageData };
