let __VITE_CSS__ = document.createElement("style");
__VITE_CSS__.innerHTML = "";
document.head.appendChild(__VITE_CSS__);
import {c as createElement} from "./d2371593.js";
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
  }, /* @__PURE__ */ createElement("h2", null, `Advanced Filesystem Routing: findPages API`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `The "Basic Filesystem Routing Convention" should satisfy most users' needs. `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `You probably don't need to read this advanced guide`), `.`)), /* @__PURE__ */ createElement("p", null, `For advanced users, vite-pages let you implement your own filesystem routing convention: you can `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `teach vite-pages how to collect pages from your project`), `.`), /* @__PURE__ */ createElement("p", null, `When `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/custom-find-pages/vite.demos.ts"
    }
  }, `configuring vite-plugin-react-pages`), `, you can pass a second argument, `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `findPages`), `.`), /* @__PURE__ */ createElement("p", null, `Here is the definition of the vite-plugin-react-pages config function:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `function createPlugin(
  pagesDir: string = path.join(process.cwd(), 'pages'),
  findPages?: (helpers: IFindPagesHelpers) => Promise<void>
): VitePlugin

export interface IFindPagesHelpers {
  /**
   * readFile util with cache
   */
  readFile: (filePath: string) => Promise<string>
  /**
   * Read the static data from a file.
   */
  extractStaticData: (
    filePath: string
  ) => Promise<{
    [key: string]: any
    sourceType: string
  }>
  /**
   * Glob utils. Return matched file paths.
   */
  globFind: (
    baseDir: string,
    glob: string
  ) => Promise<
    {
      relative: string
      absolute: string
    }[]
  >
  /**
   * Use the basic filesystem routing convention to find pages.
   */
  defaultFindPages: (baseDir: string) => Promise<IPageData[]>
  /**
   * Register page data.
   * User who custom findPages should use it to register the data he/she finds.
   */
  addPageData: (pageData: IPageData) => void
}

export interface IPageData {
  /**
   * The page route path.
   * User can register multiple page data with same pageId,
   * as long as they have different keys.
   * Page data with same pageId will be merged.
   *
   * @example '/posts/hello-world'
   */
  pageId: string
  /**
   * The data key.
   * If it conflicts with an already-registered data,
   * error will be thrown.
   *
   * @default 'main'
   */
  key?: string
  /**
   * The path to the runtime data module
   */
  dataPath?: string

  staticData?: any
}
`)), /* @__PURE__ */ createElement("p", null, `You can implement your own filesystem routing convention with the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `findPages`), ` API. It provides some useful helper functions to you. It even let you create a page with runtime data that is composed of multiple files.`), /* @__PURE__ */ createElement("h3", null, `Composed Pages`), /* @__PURE__ */ createElement("p", null, `Normal filesystem routing mechanism assumes that one page must have a single entry file. But vite-pages doesn't force that rule! `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `Vite-pages let you create a page with runtime data that is composed of multiple files.`), ` This is a very powerful feature of vite-pages's filesystem routing mechanism.`), /* @__PURE__ */ createElement("p", null, `With the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `findPages`), ` API, you can register multiple data with same `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `pageId`), `. Page data with same `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `pageId`), ` will be merged. Checkout the type definition of `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `addPageData`), ` above.`), /* @__PURE__ */ createElement("h3", null, `Example`), /* @__PURE__ */ createElement("p", null, `For example, suppose you are developing a React component library. Your project have file structure like this:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-text"
    }
  }, `src
├── Button
│   ├── demos
│   │   ├── demo1.tsx
│   │   └── demo2.tsx
│   ├── index.tsx
│   └── style.module.css
├── Card
│   ├── demos
│   │   ├── demo1.tsx
│   │   └── demo2.tsx
│   ├── index.tsx
│   └── style.module.css
└── index.ts
`)), /* @__PURE__ */ createElement("p", null, `You want to use Vite as your local demo development environment. How to collect demos of all components from this project? The file structure doesn't follow our "Basic Filesystem Routing Convention".`), /* @__PURE__ */ createElement("p", null, `Answer: use `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `findPages`), ` API to implement your own filesystem routing convention! Here is an example of the vite-plugin-react-pages config function:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `pages(path.join(__dirname, 'pages'), async (helpers) => {
      const pagesByComponent: { [comp: string]: any } = {}
      const demosBasePath = path.join(__dirname, 'src')
      // find all demo modules
      let demoPaths = await helpers.globFind(
        demosBasePath,
        '*/demos/**/*.{[tj]sx,md?(x)}'
      )

      await Promise.all(
        demoPaths.map(async ({ relative, absolute }) => {
          const match = relative.match(/(.*)\\/demos\\/(.*)\\.([tj]sx|mdx?)$/)
          if (!match) throw new Error('unexpected file: ' + absolute)
          const [_, componentName, demoPath] = match
          const publicPath = \`/\${componentName}\`

          // register the demo module as page daga
          helpers.addPageData({
            pageId: publicPath,
            key: demoPath,
            dataPath: absolute,
            staticData: await helpers.extractStaticData(absolute),
          })

          if (!pagesByComponent[componentName]) {
            pagesByComponent[componentName] = {
              publicPath,
            }
          }
        })
      )

      // add static data(title) for each component page
      Object.entries(pagesByComponent).forEach(
        ([componentName, { publicPath }]) => {
          helpers.addPageData({
            pageId: publicPath,
            key: 'title',
            staticData: componentName + ' Title',
          })
        }
      )

      // we also want to collect pages from \`/pages\` with basic filesystem routing convention
      const defaultPages = await helpers.defaultFindPages(
        path.join(__dirname, 'pages')
      )
      defaultPages.forEach(helpers.addPageData)
    }),
`)), /* @__PURE__ */ createElement("p", null, `Checkout the complete example in `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/tree/master/fixtures/custom-find-pages"
    }
  }, `the custom-find-pages fixture`), `.`));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
