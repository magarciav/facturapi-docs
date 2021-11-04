"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[159],{8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7462),r=t(7294),i=t(2389),l=t(9443);var s=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3039),c=t(6010),o="tabItem_1uMI";function d(e){var a,t,n,i=e.lazy,l=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),h=(0,u.lx)(f,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=b[0])?void 0:n.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),T=g.tabGroupChoices,y=g.setTabGroupChoices,N=(0,r.useState)(k),w=N[0],E=N[1],C=[],L=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var z=T[m];null!=z&&z!==w&&f.some((function(e){return e.value===z}))&&E(z)}var x=function(e){var a=e.currentTarget,t=C.indexOf(a),n=f[t].value;n!==w&&(L(a),E(n),null!=m&&y(m,n))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;t=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;t=C[r]||C[C.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},v)},f.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,className:(0,c.Z)("tabs__item",o,{"tabs__item--active":w===a}),key:a,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=t?t:a)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function p(e){var a=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},4691:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=t(5064),s=t(8215),u=["components"],c={sidebar_position:3},o="Autenticaci\xf3n",d={unversionedId:"authenticate",id:"authenticate",isDocsHomePage:!1,title:"Autenticaci\xf3n",description:"Facturapi utiliza el m\xe9todo de autenticaci\xf3n HTTP Bearer Token.",source:"@site/docs/authenticate.mdx",sourceDirName:".",slug:"/authenticate",permalink:"/facturapi-docs/docs/authenticate",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/authenticate.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/facturapi-docs/docs/install"},next:{title:"Facturas",permalink:"/facturapi-docs/docs/started/invoices"}},p=[{value:"\xbfC\xf3mo obtener mis llaves secretas?",id:"c\xf3mo-obtener-mis-llaves-secretas",children:[],level:2},{value:"Ambientes y llaves secretas",id:"ambientes-y-llaves-secretas",children:[{value:"Ambiente Test / Llave secreta Test",id:"ambiente-test--llave-secreta-test",children:[],level:3},{value:"Ambiente Live / Llave secreta Live",id:"ambiente-live--llave-secreta-live",children:[],level:3},{value:"Ambiente de administraci\xf3n de cuenta / Llave de usuario",id:"ambiente-de-administraci\xf3n-de-cuenta--llave-de-usuario",children:[],level:3}],level:2}],m={toc:p};function v(e){var a=e.components,t=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,i.kt)("p",null,"Facturapi utiliza el m\xe9todo de autenticaci\xf3n HTTP ",(0,i.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Token"),"."),(0,i.kt)("p",null,"El token a utilizar depender\xe1 de lo que necesites hacer. Lo explicamos con m\xe1s detalle en la siguiente secci\xf3n, pero en resumen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Test Secret Key"),": Identifica a una organizaci\xf3n en ambiente Test para administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Live Secret Key"),": Identifica a una Organizaci\xf3n en ambiente Live para administrar recursos (clientes, facturas, etc). Es \xfanica por organizaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Secret Key"),": Identifica a tu cuenta para crear y confiigurar organizaciones. Es \xfanica por cuenta.")),(0,i.kt)(l.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("p",null,"Cada petici\xf3n deber\xe1 incluir tu llave privada en el\nencabezado de autorizaci\xf3n."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/<endpoint_method> \\\n  -H "Authorization: Bearer <SECRET_KEY>" \\\n'))),(0,i.kt)(s.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Usa la llave secreta al momento de crear la instancia del cliiente"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('<SECRET_KEY>');\n"))),(0,i.kt)(s.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("p",null,"Usa la llave secreta al momento de crear la instancia del cliiente"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("<SECRET_KEY>");\n'))),(0,i.kt)(s.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("p",null,"Usa la llave secreta al momento de crear la instancia del cliiente"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi( "<SECRET_KEY>" );\n')))),(0,i.kt)("h2",{id:"c\xf3mo-obtener-mis-llaves-secretas"},"\xbfC\xf3mo obtener mis llaves secretas?"),(0,i.kt)("p",null,"Crea una cuenta gratuita visitando:"),(0,i.kt)("a",{href:"https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages",target:"_blank"},"https://www.facturapi.io/register"),(0,i.kt)("h2",{id:"ambientes-y-llaves-secretas"},"Ambientes y llaves secretas"),(0,i.kt)("h3",{id:"ambiente-test--llave-secreta-test"},"Ambiente Test / Llave secreta Test"),(0,i.kt)("p",null,"Facturapi cuenta con un ambiente de pruebas \xf3 sandbox que puedes usar durante el desarrollo de tu aplicaci\xf3n sin generar ning\xfan costo. Las facturas creadas en este ambiente no son enviadas al SAT y por lo tanto no tienen validez fiscal."),(0,i.kt)("p",null,"En este ambiente tambi\xe9n puedes crear otros recursos como Clientes, Productos, Retenciones y Recibos."),(0,i.kt)("p",null,"Los recursos creados en ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," no se mezclan con el ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"Live"),"."),(0,i.kt)("p",null,"Para emitir facturas en ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," basta con utilizar la llave secreta ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," de tu organizaci\xf3n."),(0,i.kt)("h3",{id:"ambiente-live--llave-secreta-live"},"Ambiente Live / Llave secreta Live"),(0,i.kt)("p",null,"Una vez que hayas terminado de configurar tu organizaci\xf3n, podr\xe1s obtener tu llave secreta ",(0,i.kt)("inlineCode",{parentName:"p"},"Live")," para crear recursos en ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"Live"),"."),(0,i.kt)("p",null,"Las facturas en ambiente ",(0,i.kt)("inlineCode",{parentName:"p"},"Live")," son timbradas y enviadas al SAT, y por tanto son v\xe1lidas fiscalmente."),(0,i.kt)("h3",{id:"ambiente-de-administraci\xf3n-de-cuenta--llave-de-usuario"},"Ambiente de administraci\xf3n de cuenta / Llave de usuario"),(0,i.kt)("p",null,"Si necesitas registrar m\xe1s organizaciones bajo tu cuenta y emitir facturas usando distintos RFC emisores, puedes utilizar la llave secreta ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," para registrar nuevas organizaciones y configurarlas por medio de la API. Puedes encontrar esta llave en el ",(0,i.kt)("a",{parentName:"p",href:"https://www.facturapi.io/dashboard/integration"},"Centro de Integraci\xf3n"),", en tu dashboard de Facturapi."))}v.isMDXComponent=!0}}]);