import './clientRender.add4902f.js';
import { c as createElement } from './esm.c176b8b7.js';

const layoutProps = {};
const MDXLayout = "wrapper";
function MDXContent({
  components,
  ...props
}) {
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
  }, `vite-plugin-react-page`), ` (let's call it "vite pages") is a React framework powered by `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite"
    }
  }, `vite`), `. `, createElement("strong", {
    parentName: "p"
  }, `It is very suitable for documentation site. It can also serve as a stories(demos) development environment for your library.`), ` (like `, createElement("a", {
    parentName: "p",
    ...{
      href: "https://storybook.js.org/"
    }
  }, `storybook`), `). It has many features that help developers `, createElement("strong", {
    parentName: "p"
  }, `create an React App quickly`), `:`), createElement("ul", null, createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Fantastic development experience`), `. Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit the files.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Filesystem based routing`), `. It is easy to create, locate and develop pages. You don't need to worry about routing configuration.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Support `, createElement("a", {
    parentName: "strong",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`)), `. You can write content with both "normal React" or `, createElement("a", {
    parentName: "li",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`), `. Normal Reactjs is flexible and composable. While Mdx is readable and easy to edit. You can choose the proper format for your task. These formats can import each other like normal esModules.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Simple but powerful theme customization`), `. You can customize anything on the page. It is easy to write a theme that is sharable and configurable. If you use typescript, your theme configuration code will get type-check and intelliSense.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Automatic code splitting based on pages`), `. Visitors don't need to download the whole app, they only load page data as needed.`), createElement("li", {
    parentName: "ul"
  }, createElement("strong", {
    parentName: "li"
  }, `Support SSR out of the box`), `. By pre-rendering your app into HTML in buildtime, users can see the content before any JS is loaded.`)), createElement("h2", null, `Getting stated`), createElement("ol", null, createElement("li", {
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
  }, `dist`), `.`), createElement("li", {
    parentName: "ol"
  }, createElement("inlineCode", {
    parentName: "li"
  }, `npm run ssr`), ` and serve the `, createElement("inlineCode", {
    parentName: "li"
  }, `dist`), `. You can `, createElement("a", {
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
