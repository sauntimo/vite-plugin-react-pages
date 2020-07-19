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
  }, /* @__PURE__ */ createElement("h1", null, `📘 vite-plugin-react-page`), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite-plugin-react-pages"
    }
  }, `vite-plugin-react-page`), ` (let's call it "vite-pages") is a React app framework powered by `, /* @__PURE__ */ createElement("a", {
    parentName: "p",
    ...{
      href: "https://github.com/vitejs/vite"
    }
  }, `vite`), `. It is very suitable for:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `blog site`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `documentation site for your library`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `stories(demos) development for your React components(like `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://storybook.js.org/"
    }
  }, `storybook`), `)`)), /* @__PURE__ */ createElement("p", null, `It has many features that help developers `, /* @__PURE__ */ createElement("strong", {
    parentName: "p"
  }, `build an React App quickly`), `:`), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Fantastic development experience`), `. Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit your code.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Filesystem based routing`), `. By following a `, /* @__PURE__ */ createElement(Link, {
    to: "/fs-routing",
    mdxType: "Link"
  }, `simple filesystem routing convention`), `, It is easy to create, locate and develop pages. You don't need to worry about routing configuration. For `, /* @__PURE__ */ createElement(Link, {
    to: "/advanced-fs-routing",
    mdxType: "Link"
  }, `advanced users`), `, you can tell vite-pages how to find page files, so that vite-pages can work with any project file structure.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Support Mdx`), `. You can write content with both "normal React" or `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://mdxjs.com/"
    }
  }, `Mdx`), `. Normal Reactjs is more flexible and composable. While Mdx is more readable and easy to edit. You can choose the proper format for your task. These formats can import each other like normal esModules.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Powerful `, /* @__PURE__ */ createElement(Link, {
    to: "/theme",
    mdxType: "Link"
  }, `theme customization`)), `. Vite-pages itself doesn't render any concrete DOM node. You can customize `, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `anything`), ` on the page with theme. It is easy to write a theme that is sharable and configurable. If you use typescript, the users of your theme will get type-check and intelliSense.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Automatic code splitting based on pages`), `. Visitors don't need to download the whole app, they only load page data as needed.`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, /* @__PURE__ */ createElement("strong", {
    parentName: "li"
  }, `Support SSR out of the box`), `. By pre-rendering your app into HTML at buildtime, users can see the content before any JS is loaded.`)), /* @__PURE__ */ createElement("p", null, `In a nutshell, vite-pages is a React app framework that collects your pages data and passes them to your theme.`), /* @__PURE__ */ createElement("h2", null, `Getting stated`), /* @__PURE__ */ createElement("ol", null, /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, `initialize a vite-pages project:`, /* @__PURE__ */ createElement("ul", {
    parentName: "li"
  }, /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `use `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm init @csr632/vite-app my-app --template react-pages-app`), ` to initialize an app starter, or`), /* @__PURE__ */ createElement("li", {
    parentName: "ul"
  }, `use `, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm init @csr632/vite-app my-lib --template react-pages-lib`), ` to initialize a library starter.`))), /* @__PURE__ */ createElement("li", {
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
  }, `npm run build`), `.`), /* @__PURE__ */ createElement("li", {
    parentName: "ol"
  }, /* @__PURE__ */ createElement("inlineCode", {
    parentName: "li"
  }, `npm run ssr`), `. You can `, /* @__PURE__ */ createElement("a", {
    parentName: "li",
    ...{
      href: "https://developers.google.com/web/tools/chrome-devtools/javascript/disable"
    }
  }, `disable javascript in your browser`), `, to verify if it can still render.`)));
}
MDXContent.isMDXComponent = true;

export default MDXContent;
