var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,i=(e,i)=>{for(var r in i||(i={}))t.call(i,r)&&n(e,r,i[r]);if(a)for(var r of a(i))o.call(i,r)&&n(e,r,i[r]);return e};import{c as r,L as l}from"./clientRender.4d8779ba.js";const p={};function s(e){var{components:n}=e,s=((e,n)=>{var i={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(i[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&o.call(e,r)&&(i[r]=e[r]);return i})(e,["components"]);return r("wrapper",i(i(i({},p),s),{components:n,mdxType:"MDXLayout"}),r("h1",null,"📘 vite-plugin-react-page"),r("p",null,r("a",i({parentName:"p"},{href:"https://github.com/vitejs/vite-plugin-react-pages"}),"vite-plugin-react-page")," (vite-pages) is a React app framework powered by ",r("a",i({parentName:"p"},{href:"https://github.com/vitejs/vite"}),"vite"),". It is very suitable for:"),r("ul",null,r("li",{parentName:"ul"},"blog site"),r("li",{parentName:"ul"},"documentation site for your library or product"),r("li",{parentName:"ul"},"stories/demos/playgrounds for your React components or libs(like ",r("a",i({parentName:"li"},{href:"https://storybook.js.org/"}),"storybook"),")")),r("p",null,"It provides many features that help developers ",r("strong",{parentName:"p"},"build a React App quickly"),":"),r("ul",null,r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Fantastic development experience"),". Start the local development server in a blink, even when you have many pages. Hot module replacement works with React and Mdx, so you can get instant feedback when you edit your code."),r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Filesystem based routing"),". By following a ",r(l,{to:"/fs-routing",mdxType:"Link"},"simple filesystem routing convention"),", It is easy to create, locate and develop pages. You don't need to worry about routing configuration. For advanced users, you can ",r(l,{to:"/advanced-fs-routing",mdxType:"Link"},"tell vite-pages how to find page files"),", so that vite-pages can work with any project file structure."),r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Support Mdx"),'. You can write content with either "normal React" or ',r("a",i({parentName:"li"},{href:"https://mdxjs.com/"}),"Mdx"),". Normal Reactjs is more flexible and composable. While Mdx is more readable and easier to edit. You can choose the proper format for your task. These formats can import each other like normal esModules."),r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Powerful ",r(l,{to:"/theme",mdxType:"Link"},"theme customization")),". Vite-pages itself doesn't render any concrete DOM node. You can customize ",r("strong",{parentName:"li"},"anything")," on the page with theme. It is easy to write a theme that is sharable and configurable. If you use typescript, the users of your theme will get type-check and intelliSense."),r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Automatic code splitting based on pages"),". Visitors don't need to download the whole app, they only load page data as needed."),r("li",{parentName:"ul"},r("strong",{parentName:"li"},"Support static site generation out of the box"),". By pre-rendering your app into HTML at buildtime, users can see the content before any JS is loaded. With this feature, you can deploy your single page apps on GitHub Pages(which ",r("a",i({parentName:"li"},{href:"https://www.google.com/search?q=github+pages+single+page+apps&oq=github+pages+single+page+apps"}),"doesn't natively support single page apps"),").")),r("h2",null,"Getting stated"),r("ol",null,r("li",{parentName:"ol"},"Initialize a vite-pages project:",r("ul",{parentName:"li"},r("li",{parentName:"ul"},"execute ",r("inlineCode",{parentName:"li"},"npm init vite-pages app-demo --template app")," to initialize an app project, or"),r("li",{parentName:"ul"},"execute ",r("inlineCode",{parentName:"li"},"npm init vite-pages library-demo --template lib")," to initialize a library project, or"),r("li",{parentName:"ul"},"execute ",r("inlineCode",{parentName:"li"},"npm init vite-pages library-monorepo-demo --template lib-monorepo")," to initialize a library project with monorepo setup."))),r("li",{parentName:"ol"},r("inlineCode",{parentName:"li"},"npm install")),r("li",{parentName:"ol"},r("inlineCode",{parentName:"li"},"npm run dev")," and play with the local dev envirenment."),r("li",{parentName:"ol"},r("inlineCode",{parentName:"li"},"npm run build"),"."),r("li",{parentName:"ol"},r("inlineCode",{parentName:"li"},"npm run ssr"),". You can ",r("a",i({parentName:"li"},{href:"https://developers.google.com/web/tools/chrome-devtools/javascript/disable"}),"disable javascript in your browser"),", to verify if it can still render.")))}s.isMDXComponent=!0;var m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:s});const u={};u.main=m;export default u;
