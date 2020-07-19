let __VITE_CSS__ = document.createElement('style');__VITE_CSS__.innerHTML = "";document.head.appendChild(__VITE_CSS__);import { c as createElement, L as Link } from './clientRender.48cd363d.js';

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
  }, /* @__PURE__ */ createElement("h1", null, `Filesystem Routing`), /* @__PURE__ */ createElement("p", null, `Vite-pages generates page routes based on your project file structure (filesystem routing).`), /* @__PURE__ */ createElement("h2", null, `Basic Filesystem Routing Convention`), /* @__PURE__ */ createElement("p", null, `The basic filesystem routing convention is very intuitive. It works out of the box and doesn't need any config. It should satisfy most users' needs.`), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `You can create a page by simply creating a file`), `: `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `page-name$.tsx`), `. Notice the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `$`), ` `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `at the end of the filename`), `. Vite-pages recognizes it and know it is a page entry.`), /* @__PURE__ */ createElement("p", null, `If the filename is `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "p"
  }, `index$.tsx`), `, the page route path will be the path of the directory. See examples below.`), /* @__PURE__ */ createElement("blockquote", null, /* @__PURE__ */ createElement("p", {
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
  }, `/dir-name/page-three`))))), /* @__PURE__ */ createElement("p", null, `Theme can decide what to render when no page matches the url. Checkout `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `the theme doc`), `.`), /* @__PURE__ */ createElement("p", null, `Checkout `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages/blob/master/fixtures/basic/pages"
    }
  }, `the basic fixture`), ` for an example.`));
}
MDXContent.isMDXComponent = true;

export default MDXContent;
