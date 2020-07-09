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
  }, /* @__PURE__ */ createElement("h1", null, `Pages`), /* @__PURE__ */ createElement("p", null, `vite-pages use filesystem based routing. You can create a page by simply creating a file: `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `page-name$.tsx`), `. Notice the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `at the end of the filename`), `. vite-pages recognizes it and know it is a page file.`), /* @__PURE__ */ createElement("p", null, `If the filename is `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `index$.tsx`), `, the page url path will be the path of the directory.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
    parentName: "blockquote"
  }, `All file extensions `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `.ts|.tsx|.js|.jsx|.md|.mdx`), ` works, as long as `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` is the last character before the extension.`)), /* @__PURE__ */ createElement("h2", null, `Examples`), /* @__PURE__ */ createElement("table", null, /* @__PURE__ */ createElement("thead", {
    parentName: "table"
  }, /* @__PURE__ */ createElement("tr", {
    parentName: "thead"
  }, /* @__PURE__ */ createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `file path`), /* @__PURE__ */ createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `page url path`))), /* @__PURE__ */ createElement("tbody", {
    parentName: "table"
  }, /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `index$.tsx`)), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/`))), /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `$.tsx`), ` (has same effect as `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `index$.tsx`), `)`), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/`))), /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `page-one$.tsx`)), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/page-one`))), /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `page-two$.md`)), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/page-two`))), /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/index$.jsx`)), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name`))), /* @__PURE__ */ createElement("tr", {
    parentName: "tbody"
  }, /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/page-three$.mdx`)), /* @__PURE__ */ createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name/page-three`))))), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `404$.tsx`), ` (whatever extension) is a special fallback page. It will be displayed when no other page matches the url. Checkout the `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/basic/pages/404%24.tsx"
    }
  }, `basic fixture`), `.`));
}
MDXContent.isMDXComponent = true;

var pages$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { pages$ as pageData };
