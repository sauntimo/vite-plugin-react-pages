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
  }, /* @__PURE__ */ createElement("h1", null, `Magic import`), /* @__PURE__ */ createElement("p", null, `Vite-pages support "magic import". Magic import is `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `normal esModule import sytax`), ` with `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `tailored path convention`), `. It enable users to import things with special behavior. Users can use it to do powerful things.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `If you are familiar with the webpack loader mechanism, you can easily guess how magic import works.`)), /* @__PURE__ */ createElement("h2", null, `Analyze source code`), /* @__PURE__ */ createElement("p", null, `When you are documenting for some JavaScript/Typescript library, you normally want to show some js/ts code to readers. This magic import help you load source code from a module. It is kind of like `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://webpack.js.org/loaders/raw-loader/"
    }
  }, `raw-loader from webpack`), `. This is very useful for demo code displaying.`), /* @__PURE__ */ createElement("p", null, `You can get the module tree analysis by importing the module with query `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `?analyzeSource`), `.`), /* @__PURE__ */ createElement("p", null, `For example:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `import demoSource from '../demos/demo1?analyzeSource'
`)), /* @__PURE__ */ createElement("p", null, `will give you:`), /* @__PURE__ */ createElement("pre", null, /* @__PURE__ */ createElement("code", {
    parentName: "pre",
    ...{
      className: "language-ts"
    }
  }, `{
  "entry": "demo1.tsx",
  "modules": {
    "dir/util.ts": {
      "code": "the source code of dir/util.ts..."
    },
    "demo1.module.css": {
      "code": "the source code of demo1.module.css..."
    },
    "demo1.tsx": {
      "code": "the source code of demo1.tsx..."
    }
  },
  "externals": {
    "react": "^16.13.1",
    "antd": "^4.4.1"
  }
}
`)), /* @__PURE__ */ createElement("p", null, `Checkout the `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/analyze-source-code/pages/index$.tsx"
    }
  }, `analyze-source-code fixture`), ` for an example.`), /* @__PURE__ */ createElement("h3", null, `Relative module dependencies`), /* @__PURE__ */ createElement("p", null, `For relative module dependencies(.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `import util from './dir/util.ts'`), `), their source code will be collected into the analyze result, as shown by the previous example.`), /* @__PURE__ */ createElement("p", null, `Relative module import can be js, jsx, ts, tsx, css, sass, etc.`), /* @__PURE__ */ createElement("h3", null, `External module dependencies`), /* @__PURE__ */ createElement("p", null, `For those dependencies from `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `node_modules`), ` (.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `import React from 'react'`), `), this magic import will `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `not`), ` load source code for them. Instead, the dependencies' versions are recorded, as shown by the previous example.`), /* @__PURE__ */ createElement("p", null, `This magic import gets dependencies' versions by find `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `package.json`), ` up from the importer, and find the package version from these `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `package.json`), ` fields:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `peerDependencies`)), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `devDependencies`)), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `dependencies`)), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `demoDependencies`))), /* @__PURE__ */ createElement("h2", null, `More magic imports?`), /* @__PURE__ */ createElement("p", null, `If you come up with more useful magic imports, `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/issues"
    }
  }, `feel free to open an issue or PR`), `. Contributions are always welcomed!`));
}
MDXContent.isMDXComponent = true;
var m0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: MDXContent
});
const modules = {};
modules["main"] = m0;
export default modules;
