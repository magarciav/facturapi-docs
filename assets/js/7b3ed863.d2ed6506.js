"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[2657],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,s(s({ref:t},u),{},{components:a})):n.createElement(f,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17051:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),s=["components"],c={sidebar_position:2},o="Conceptos",l={unversionedId:"getting-started/concepts",id:"getting-started/concepts",title:"Conceptos",description:"Si esta es tu primera vez integrando la API de Facturapi, te recomendamos familiarizarte con los siguientes conceptos, los cuales te ayudar\xe1n a entender mejor el flujo de integraci\xf3n.",source:"@site/docs/getting-started/concepts.md",sourceDirName:"getting-started",slug:"/getting-started/concepts",permalink:"/docs/getting-started/concepts",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/getting-started/concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/getting-started/intro"},next:{title:"Instalaci\xf3n",permalink:"/docs/getting-started/install"}},u={},p=[{value:"Recursos",id:"recursos",level:2},{value:"Pertenecientes a cada organizaci\xf3n",id:"pertenecientes-a-cada-organizaci\xf3n",level:4},{value:"Pertenecientes a la cuenta del usuario:",id:"pertenecientes-a-la-cuenta-del-usuario",level:4},{value:"Roles",id:"roles",level:2},{value:"Ambientes",id:"ambientes",level:2},{value:"Llaves secretas",id:"llaves-secretas",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conceptos"},"Conceptos"),(0,i.kt)("p",null,"Si esta es tu primera vez integrando la API de Facturapi, te recomendamos familiarizarte con los siguientes conceptos, los cuales te ayudar\xe1n a entender mejor el flujo de integraci\xf3n."),(0,i.kt)("h2",{id:"recursos"},"Recursos"),(0,i.kt)("p",null,"La API de Facturapi te permite crear, consultar y administrar los siguientes recursos:"),(0,i.kt)("h4",{id:"pertenecientes-a-cada-organizaci\xf3n"},"Pertenecientes a cada organizaci\xf3n"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clientes"),(0,i.kt)("li",{parentName:"ul"},"Productos"),(0,i.kt)("li",{parentName:"ul"},"Facturas"),(0,i.kt)("li",{parentName:"ul"},"Recibos"),(0,i.kt)("li",{parentName:"ul"},"Retenciones")),(0,i.kt)("h4",{id:"pertenecientes-a-la-cuenta-del-usuario"},"Pertenecientes a la cuenta del usuario:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Organizaciones")),(0,i.kt)("h2",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Existen 2 roles distintos con los que puedes identificarte en la API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organizaci\xf3n"),". Identificarte como ",(0,i.kt)("strong",{parentName:"li"},"organizaci\xf3n")," te permite emitir facturas usando la\ninformaci\xf3n fiscal previamente configurada para la organizaci\xf3n, as\xed como crear, consular y\nrealizar operaciones sobre recursos que le pertenezcan. Para identificarte con este rol,\ndeber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," o la ",(0,i.kt)("strong",{parentName:"li"},"Live Secret Key")," de la organizaci\xf3n,\ndependiendo del ",(0,i.kt)("strong",{parentName:"li"},"ambiente")," que quieras utilizar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usuario"),". Identificarte como usuario te permite crear y administrar\norganizaciones que pertenecer\xe1n a tu cuenta de usuario. Para identificarte con este\nrol, deber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"User Secret Key")," de tu cuenta.")),(0,i.kt)("h2",{id:"ambientes"},"Ambientes"),(0,i.kt)("p",null,"Facturapi cuenta con 2 ambientes independientes y \xfanicos por cada organizaci\xf3n."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ambiente Test"),". \xdasalo durante la etapa de desarrollo. Las facturas que crees en este\nambiente no ser\xe1n enviadas al SAT, y por lo tanto no tendr\xe1n validez fiscal. Para usar este\nambiente deber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," de la organizaci\xf3n que desees identificar\ndurante el proceso de autenticaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ambiente Live"),". \xdasalo al operar en producci\xf3n. Las facturas que crees en este ambiente\nse enviar\xe1n al SAT y tendr\xe1n validez fiscal. Para usar este ambiente deber\xe1s utilizar la\n",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," de la organizaci\xf3n que desees identificar durante el proceso de\nautenticaci\xf3n.")),(0,i.kt)("p",null,"Los recursos creados por una organizaci\xf3n en un ambiente son inaccesibles para otras organizaciones, o para la misma organizaci\xf3n en diferents ambientes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nota:")," No requieres pagar una suscripci\xf3n para usar la API en ambiente Test."),(0,i.kt)("h2",{id:"llaves-secretas"},"Llaves secretas"),(0,i.kt)("p",null,"Sirven para identificar a una organizaci\xf3n o a una cuenta de usuario al llamar a la API de Facturapi."),(0,i.kt)("p",null,"Existen 3 tipos de llaves secretas, cada una con una funci\xf3n espec\xedfica:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Secret Key"),": Identifica a la organizaci\xf3n en ambiente Test para crear y administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Live Secret Key"),": Identifica a una Organizaci\xf3n en ambiente Live para crear y administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Secret Key"),": Identifica a tu cuenta para crear y confiigurar organizaciones. Es \xfanica por cuenta.")),(0,i.kt)("p",null,"Las llaves secretas se utilizan durante el proceso de ",(0,i.kt)("a",{parentName:"p",href:"/docs/getting-started/authenticate"},"autenticaci\xf3n"),"."),(0,i.kt)("p",null,"Para obtener tus llaves secretas y crear una cuenta gratuita en Facturapi visita:"),(0,i.kt)("a",{href:"https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages",target:"_blank"},"https://www.facturapi.io/register"))}m.isMDXComponent=!0}}]);