import './index.29c7f402.js';
import { c as createElement } from './esm.9f2ab55b.js';
export { _ as renderPage } from './esm.9f2ab55b.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({components, ...props}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `Pages`), createElement("p", null, `Vite pages use filesystem based routing. You can create a page by simply creating a file: `, createElement("inlineCode", {
    parentName: "p"
  }, `page-name$.tsx`), `. Notice the `, createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` `, createElement("strong", {
    parentName: "p"
  }, `at the end of the filename`), `. Vite pages recognize it and know it is a page file.`), createElement("p", null, `If the filename is `, createElement("inlineCode", {
    parentName: "p"
  }, `index$.tsx`), `, the page url path will be the path of the directory.`), createElement("blockquote", null, createElement("p", {
    parentName: "blockquote"
  }, `All file extensions `, createElement("inlineCode", {
    parentName: "p"
  }, `.ts|.tsx|.js|.jsx|.md|.mdx`), ` works, as long as `, createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` is the last character before the extension.`)), createElement("h2", null, `Examples`), createElement("table", null, createElement("thead", {
    parentName: "table"
  }, createElement("tr", {
    parentName: "thead"
  }, createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `file path`), createElement("th", {
    parentName: "tr",
    ...{
      align: null
    }
  }, `page url path`))), createElement("tbody", {
    parentName: "table"
  }, createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `index$.tsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `page-one$.tsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/page-one`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `page-two$.md`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/page-two`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/index$.jsx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name`))), createElement("tr", {
    parentName: "tbody"
  }, createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `dir-name/page-three$.mdx`)), createElement("td", {
    parentName: "tr",
    ...{
      align: null
    }
  }, createElement("inlineCode", {
    parentName: "td"
  }, `/dir-name/page-three`))))));
}
MDXContent.isMDXComponent = true;

var pages$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { pages$ as pageData };
