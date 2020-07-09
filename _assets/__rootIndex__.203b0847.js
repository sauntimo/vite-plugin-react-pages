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
  }, /* @__PURE__ */ createElement("h1", null, `📘 vite-plugin-react-page`), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/csr632/vite-plugin-react-pages"
    }
  }, `vite-plugin-react-page`), ` (let's call it "vite pages") is a React framework powered by `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite"
    }
  }, `vite`), `. `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `It is very suitable for documentation site. It can also serve as a stories(demos) development environment for your library.`), ` (like `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://storybook.js.org/"
    }
  }, `storybook`), `). It has many features that help developers `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `create an React App quickly`), `:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Fantastic development experience`), `. Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit the files.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Filesystem based routing`), `. It is easy to create, locate and develop pages. You don't need to worry about routing configuration.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Support `, /* @__PURE__ */ createElement("a", {
    parentName: "strong",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`)), `. You can write content with both "normal React" or `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`), `. Normal Reactjs is flexible and composable. While Mdx is readable and easy to edit. You can choose the proper format for your task. These formats can import each other like normal esModules.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Simple but powerful theme customization`), `. You can customize anything on the page. It is easy to write a theme that is sharable and configurable. If you use typescript, your theme configuration code will get type-check and intelliSense.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Automatic code splitting based on pages`), `. Visitors don't need to download the whole app, they only load page data as needed.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Support SSR out of the box`), `. By pre-rendering your app into HTML in buildtime, users can see the content before any JS is loaded.`)), /* @__PURE__ */ createElement("h2", null, `Getting stated`), /* @__PURE__ */ createElement("ol", null, /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, `clone `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://github.com/csr632/vite-pages-example"
    }
  }, `this repo`)), /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm install`)), /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm run dev`), ` and play with the local dev envirenment.`), /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm run build`), ` and serve the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `.`), /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm run ssr`), ` and serve the `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `. You can `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://developers.google.com/web/tools/chrome-devtools/javascript/disable"
    }
  }, `disable javascript in your browser`), `, to verify if it can still render.`)));
}
MDXContent.isMDXComponent = true;

var $ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { $ as pageData };
