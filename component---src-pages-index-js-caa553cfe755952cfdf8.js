"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{1046:function(e,t,i){i.d(t,{w_:function(){return m}});var a=i(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),r=function(){return(r=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(i[a[n]]=e[a[n]])}return i};function u(e){return e&&e.map((function(e,t){return a.createElement(e.tag,r({key:t},e.attr),u(e.child))}))}function m(e){return function(t){return a.createElement(o,r({attr:r({},e.attr)},t),u(e.child))}}function o(e){var t=function(t){var i,n=e.attr,l=e.size,u=e.title,m=s(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),a.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,m,{className:i,style:r(r({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&a.createElement("title",null,u),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},8027:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var a=i(7294),n=(i(5444),i(7198)),l=i(6179),r=function(){return a.createElement("main",{class:"content",role:"main"},a.createElement("h1",null,"Fixed footer, scroll down."),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum blanditiis soluta nesciunt doloremque voluptate earum tempore fugit eveniet veritatis adipisci magni alias vitae dignissimos incidunt repellat ea quisquam amet eligendi perspiciatis pariatur excepturi magnam omnis aliquam quo aperiam non quibusdam sit molestiae ex. Quasi ipsa libero magnam maiores delectus."),a.createElement("p",null,"Lorem ipsum dolor sit amet, (TEst PR)consectetur adipisicing elit. Quasi vitae perferendis natus porro voluptate molestias deserunt impedit numquam recusandae ducimus dolorem facilis qui autem dolorum quam omnis repellendus asperiores neque excepturi ipsa! Rerum corrupti similique adipisci dolorem cupiditate modi veritatis eum doloribus placeat at quos explicabo et quidem! Illo incidunt obcaecati quo rem nesciunt dolorum fugit vitae voluptates eaque soluta!"),a.createElement("p",null,"Lorem ipsum dolor sit amet,(adding text for test) consectetur adipisicing elit. Ad eligendi voluptates suscipit nesciunt nisi illo placeat qui voluptas quas vero voluptatibus eius in voluptate. Itaque eius nobis error id ullam officiis consectetur? Laboriosam commodi excepturi distinctio voluptas. Quam mollitia culpa ipsa? Modi magni officiis quibusdam nulla eum magnam quo in distinctio quis deleniti aliquid minima cum. Assumenda magni quae incidunt aliquam? Omnis eum aspernatur molestiae provident in quod delectus dolor sint vero? Quibusdam tempore similique."),a.createElement("h2",null,"Keep scrolling.."),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum aspernatur quibusdam ad provident molestiae adipisci numquam vitae molestias quidem vero nostrum voluptates harum! Vero veniam adipisci minima corporis quidem sunt omnis illum similique consectetur enim atque autem distinctio quas deserunt ex amet itaque ipsa cumque sed asperiores doloremque aliquid praesentium nihil tenetur cum aliquam."),a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione blanditiis vero rem cupiditate magni praesentium veniam quibusdam dicta recusandae? Fugit fuga debitis inventore possimus distinctio perferendis."),a.createElement("footer",{class:"fixed_footer"},a.createElement("div",{class:"content"},a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus nemo quo totam neque quis soluta nisi obcaecati aliquam saepe dicta adipisci blanditiis quaerat earum laboriosam accusamus nesciunt! Saepe ex maxime enim asperiores nisi. Obcaecati nostrum nobis laudantium aliquam commodi veniam magni similique ullam quis pariatur voluptatem harum id error."))))},s=i(1729),u=function(){var e=(0,a.useState)(!1),t=e[0],i=(e[1],(0,a.useRef)(null)),n=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=n.current.getBoundingClientRect().height;i.current.style.height=t?e+"px":"0px"}),[t]),a.createElement("nav",null,a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement("img",{src:s.Z,className:"logo",alt:"logo"})),a.createElement("div",{className:"links-container",ref:i},a.createElement("ul",{className:"links",ref:n},a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"MENU")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"ABOUT US")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"SUPPORT")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"CONNECT"))))))},m=i(3201),o=function(){var e=(0,a.useState)(!1),t=e[0],i=e[1];return a.createElement("div",null,a.createElement("div",{className:t?"sidebar-opened":"sidebar-closed"},a.createElement("button",{onClick:function(){i(!0)},className:"sidebar-toggle"},a.createElement(m.Fm7,null))),a.createElement("aside",{className:t?"sidebar show-sidebar":"sidebar"},a.createElement("div",{className:"sidebar-header"},a.createElement("button",{className:"close-btn",onClick:function(){i(!1)}},a.createElement(m.aHS,null))),a.createElement("ul",{className:"sidebar-links"},a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"MENU")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"ABOUT US")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"SUPPORT")),a.createElement("li",{className:"link"},a.createElement("a",{href:"#"},"CONNECT")))))},c=function(){return a.createElement("div",null,a.createElement(l.Z,{title:"TemplateRun",description:"Need a Template, we got you fam",schemaMarkup:{"@context":"https://schema.org","@type":"Corporation",name:"TemplateRun",url:"https://templaterun.github.io/TemplateRun.io/",logo:"https://github.com/TemplateRun/TemplateRun.io/blob/7dbd32d08a8bf01a903c531bfcb0755fe4b9cac8/.github/assets/images/TR%20LOGO%20new.png",sameAs:["https://github.com/TemplateRun"]}}),a.createElement(n.Z,null,a.createElement(u,null),a.createElement(o,null),a.createElement(r,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-caa553cfe755952cfdf8.js.map