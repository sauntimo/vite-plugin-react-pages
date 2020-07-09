import './clientRender.951e5cb6.js';
import { c as createElement } from './esm.083eca02.js';

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
  }, /* @__PURE__ */ createElement("h1", null, `Magic import`), /* @__PURE__ */ createElement("p", null, `vite-pages support a special import format that can help you do powerful things.`), /* @__PURE__ */ createElement("h2", null, `Analyze source code`), /* @__PURE__ */ createElement("p", null, `When you are documenting for some JavaScript/Typescript library, you normally want to show some js/ts code to readers. This magic import help you load source code from a module. It is kind of like `, /* @__PURE__ */ createElement("a", {
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
      "code": "export default (txt: string) => {\\n  console.log('util:' + txt)\\n}\\n"
    },
    "demo1.module.css": {
      "code": ".box {\\n  border: 1px solid black;\\n  padding: 16px;\\n}\\n\\n.title {\\n  margin-top: 0;\\n  margin-bottom: 8px;\\n  color: blue;\\n}\\n"
    },
    "demo1.tsx": {
      "code": "import React, { useState, useEffect, useCallback } from 'react'\\n// This is an external library used by demo\\nimport { Button } from 'antd'\\nimport 'antd/dist/antd.css'\\n\\nimport util from './dir/util'\\nimport style from './demo1.module.css'\\n\\ninterface IProps {}\\n\\nconst Demo1: React.FC<IProps> = (props) => {\\n  useEffect(() => {\\n    util('demo1')\\n  }, [])\\n\\n  return (\\n    <div className={style.box}>\\n      <h1 className={style.title}>This demo use a library</h1>\\n      <Button type=\\"primary\\">Primary Button</Button>\\n    </div>\\n  )\\n}\\n\\nexport default Demo1\\n"
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
  }, `analyze-source-code fixture`), `.`), /* @__PURE__ */ createElement("h3", null, `Relative module dependencies`), /* @__PURE__ */ createElement("p", null, `Relative module dependencies(.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `import util from './dir/util.ts'`), `) will also be collected into the analyze result, as shown by the previous example.`), /* @__PURE__ */ createElement("p", null, `Relative module import can be:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `js, jsx, ts, tsx`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `css`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Sass. You need to install `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `node-sass`)), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Stylus. You need to install `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `stylus`)), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `Less. You need to install `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `less`))), /* @__PURE__ */ createElement("h3", null, `External module dependencies`), /* @__PURE__ */ createElement("p", null, `For those dependencies from `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `node_modules`), ` (.e.g `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `import React from 'react'`), `), this magic import will not load source code for them. Instead, the dependencies' versions are recorded, as shown by the previous example.`), /* @__PURE__ */ createElement("p", null, `This magic import gets dependencies' versions by find `, /* @__PURE__ */ createElement("inlineCode", {
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
  }, `demoDependencies`))));
}
MDXContent.isMDXComponent = true;

var magicImport$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { magicImport$ as pageData };
