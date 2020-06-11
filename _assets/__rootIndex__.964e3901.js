import './client.a1801500.js';
import { c as createElement } from './esm.81d0b460.js';
export { _ as renderPage } from './esm.81d0b460.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({components, ...props}) {
  return createElement(MDXLayout, {
    ...layoutProps,
    ...props,
    components,
    mdxType: "MDXLayout"
  }, createElement("h1", null, `📘 vite-plugin-react-page`), createElement("p", null, createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/csr632/vite-plugin-react-pages"
    }
  }, `vite-plugin-react-page`), ` is a `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite"
    }
  }, `vite`), ` plugin for React. `, createElement("strong", {
    parentName: "p"
  }, `It is very suitable for document site. It is also a great React UI demo development environment`), ` (like `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://storybook.js.org/"
    }
  }, `storybook`), `).`), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, `Fantastic development experience. Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit the files. Big thanks to vite.`), createElement("li", {
    parentName: "ul"
  }, `Filesystem based routing. It is easy to create, locate and develop pages. You don't need to worry about routing configuration.`), createElement("li", {
    parentName: "ul"
  }, `You can write content with both "normal React" or `, createElement("a", {
    parentName: "li",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`), `. Normal Reactjs is flexible and composable. While Mdx is readable and easy to edit. You can choose the proper format for your task. These formats can import each other like normal esModules.`), createElement("li", {
    parentName: "ul"
  }, `Simple but powerful theme customization. With `, createElement("strong", {
    parentName: "li"
  }, `only one theme API`), `, you can customize anything on the page. It is easy to write a theme that is sharable and configurable. If you use typescript, your theme configuration will get type-check and intelliSense.`), createElement("li", {
    parentName: "ul"
  }, `Automatic code splitting based on pages. Readers don't need to download the whole app, they only load page data as needed.`)), createElement("h2", null, `Getting stated`), createElement("ol", null, createElement("li", {
    parentName: "ol"
  }, `clone `, createElement("a", {
    parentName: "li",
    ...{
      href: "https://github.com/csr632/vite-pages-example"
    }
  }, `this repo`)), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm install`)), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run dev`), ` and play with the local dev envirenment.`), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run build`), ` and serve the `, createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `.`)));
}
MDXContent.isMDXComponent = true;

var $ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': MDXContent
});

export { $ as pageData };
