"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[9671],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?n.createElement(f,o(o({ref:a},u),{},{components:t})):n.createElement(f,o({ref:a},u))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(3117),r=t(102),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:1},l="Introducci\xf3n",c={unversionedId:"intro",id:"intro",title:"Introducci\xf3n",description:"\xbfQu\xe9 es Facturapi?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Instalaci\xf3n",permalink:"/docs/install"}},u={},p=[{value:"\xbfQu\xe9 es Facturapi?",id:"qu\xe9-es-facturapi",level:2},{value:"Caracter\xedsticas soportadas",id:"caracter\xedsticas-soportadas",level:2},{value:"\xbfFacturapi es un PAC?",id:"facturapi-es-un-pac",level:2},{value:"Conceptos importantes",id:"conceptos-importantes",level:2},{value:"Recursos",id:"recursos",level:3},{value:"Roles",id:"roles",level:3},{value:"Ambientes",id:"ambientes",level:3},{value:"Llaves secretas",id:"llaves-secretas",level:3}],m={toc:p};function d(e){var a=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,i.kt)("h2",{id:"qu\xe9-es-facturapi"},"\xbfQu\xe9 es Facturapi?"),(0,i.kt)("p",null,"Facturapi es la primera REST API de facturaci\xf3n electr\xf3nica en M\xe9xico que redise\xf1a y simplifica el proceso de emitir CFDIs v\xe1lidos, enviados al SAT y a tus clientes, o a los clientes de tus clientes."),(0,i.kt)("p",null,"Es ideal para tu aplicaci\xf3n si buscas un servicio flexible y escalable para facturar a los miles de usuarios que diariamente lo solicitan en tu sitio, con inversi\xf3n m\xednima en tiempo de implementaci\xf3n."),(0,i.kt)("h2",{id:"caracter\xedsticas-soportadas"},"Caracter\xedsticas soportadas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CFDI versi\xf3n 4.0")," (vigente desde Enero de 2022)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CFDI versi\xf3n 3.3")," (soportada hasta el \xfaltimo d\xeda de Abril de 2022)."),(0,i.kt)("li",{parentName:"ul"},"Todos los tipos de facturas (CFDI):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ingreso")," (la normal)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Egreso")," (conocida como Nota de Cr\xe9dito)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pago")," (conocida como Complemento de Pago)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"N\xf3mina")," (conocida como Recibo de N\xf3mina)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Traslado")," (incluyendo el complemento Carta Porte)"))),(0,i.kt)("li",{parentName:"ul"},"Inserta cualquier ",(0,i.kt)("strong",{parentName:"li"},"complemento")," y/o ",(0,i.kt)("strong",{parentName:"li"},"addenda"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Comprobante de Retenci\xf3n"),". Incluyendo el complemento de Plataformas Tenol\xf3gicas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cancelaci\xf3n")," de comprobantes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MultiRFC"),". Registra m\xfaltiples organizaciones bajo una misma cuenta y emitie facturas usando distintos RFCs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Autofactura"),". Emite recibos digitales que puedes enviar a tus clientes para que completen los datos de su factura por si mismos en un portal con tu branding.")),(0,i.kt)("h2",{id:"facturapi-es-un-pac"},"\xbfFacturapi es un PAC?"),(0,i.kt)("p",null,"No, pero Facturapi usa ",(0,i.kt)("strong",{parentName:"p"},"PACs autorizados por el SAT")," para timbrar tu factura y darle validez fiscal."),(0,i.kt)("h2",{id:"conceptos-importantes"},"Conceptos importantes"),(0,i.kt)("p",null,"Te recomendamos familiarizarte con los siguientes conceptos para navegar esta documentaci\xf3n con facilidad."),(0,i.kt)("h3",{id:"recursos"},"Recursos"),(0,i.kt)("p",null,"Estos son los recorsos disponibles en La API de Facturapi:"),(0,i.kt)("p",null,"Pertenecientes a cada organizaci\xf3n:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Clientes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Productos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Facturas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recibos")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retenciones"))),(0,i.kt)("p",null,"Pertenecientes a la cuenta del usuario:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organizaciones"))),(0,i.kt)("p",null,"La API cuenta con m\xe9todos que te permiten crear, consultar y realizar operaciones sobre dichos recursos."),(0,i.kt)("h3",{id:"roles"},"Roles"),(0,i.kt)("p",null,"Esiten 2 roles distintos con los que puedes identificarte en la API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organizaci\xf3n"),". Identificarte como ",(0,i.kt)("strong",{parentName:"li"},"organizaci\xf3n")," te permite emitir facturas usando la\ninformaci\xf3n fiscal previamente configurada para la organizaci\xf3n, as\xed como crear, consular y\nrealizar operaciones sobre recursos que le pertenezcan. Para identificarte con este rol,\ndeber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," o la ",(0,i.kt)("strong",{parentName:"li"},"Live Secret Key")," de la organizaci\xf3n,\ndependiendo del ",(0,i.kt)("strong",{parentName:"li"},"ambiente")," que quieras utilizar."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usuario"),". Identificarte como usuario te permite crear y administrar\norganizaciones que pertenecer\xe1n a tu cuenta de usuario. Para identificarte con este\nrol, deber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"User Secret Key")," de tu cuenta.")),(0,i.kt)("h3",{id:"ambientes"},"Ambientes"),(0,i.kt)("p",null,"Facturapi cuenta con 2 ambientes independientes y \xfanicos por cada organizaci\xf3n."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ambiente Test"),". \xdasala durante la etapa de desarrollo. Las facturas que crees en este\nambiente no ser\xe1n enviadas al SAT, y por lo tanto no tendr\xe1n validez fiscal. Para usar este\nambiente deber\xe1s utilizar la ",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," de la organizaci\xf3n que desees identificar\ndurante el proceso de autenticaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ambiente Live"),". \xdasala al operar en producci\xf3n. Las facturas que crees en este ambiente\nse enviar\xe1n al SAT y tendr\xe1n validez fiscal. Para usar este ambiente deber\xe1s utilizar la\n",(0,i.kt)("strong",{parentName:"li"},"Test Secret Key")," de la organizaci\xf3n que desees identificar durante el proceso de\nautenticaci\xf3n.")),(0,i.kt)("p",null,"Los recursos creados por una organizaci\xf3n en un ambiente son inaccesibles para otras organizaciones, o para la misma\norganizaci\xf3n en diferents ambientes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Nota:")," No requieres pagar una suscripci\xf3n para usar la API en ambiente Test."),(0,i.kt)("h3",{id:"llaves-secretas"},"Llaves secretas"),(0,i.kt)("p",null,"Sirven para identificar a una organizaci\xf3n o a una cuenta de usuario al llamar a la API de Facturapi."),(0,i.kt)("p",null,"Existen 3 tipos de llaves secretas, cada una con una funci\xf3n espec\xedfica:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Secret Key"),": Identifica a la organizaci\xf3n en ambiente Test para crear y administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Live Secret Key"),": Identifica a una Organizaci\xf3n en ambiente Live para crear y administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Secret Key"),": Identifica a tu cuenta para crear y confiigurar organizaciones. Es \xfanica por cuenta.")),(0,i.kt)("p",null,"Las llaves secretas se utilizan durante el proceso de ",(0,i.kt)("a",{parentName:"p",href:"/docs/authenticate"},"autenticaci\xf3n"),"."),(0,i.kt)("p",null,"Para obtener tus llaves secretas, crea una cuenta gratuita en Facturapi visitando:"),(0,i.kt)("a",{href:"https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages",target:"_blank"},"https://www.facturapi.io/register"))}d.isMDXComponent=!0}}]);