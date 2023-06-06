"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[1726],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>m});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},d=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return a?t.createElement(f,r(r({ref:n},d),{},{components:a})):t.createElement(f,r({ref:n},d))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=a[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3846:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(7462),o=(a(7294),a(3905));const i={sidebar_position:8,title:"Relacionados"},r="Relaci\xf3n entre CFDIs",c={unversionedId:"guides/invoices/relacionados",id:"guides/invoices/relacionados",title:"Relacionados",description:'Adem\xe1s de los distintos tipos de comprobantes, existe un concepto conocido como "CFDI Relacionado" utilizado cuando se necesita emitir informaci\xf3n complementaria sobre una transacci\xf3n realizada.',source:"@site/docs/guides/invoices/relacionados.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/relacionados",permalink:"/docs/guides/invoices/relacionados",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/relacionados.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Relacionados"},sidebar:"tutorialSidebar",previous:{title:"Complementos",permalink:"/docs/guides/invoices/complementos"},next:{title:"Organizaciones (Multi-RFC)",permalink:"/docs/guides/organizations"}},s={},l=[{value:"Algunos Ejemplos de relaci\xf3n entre facturas",id:"algunos-ejemplos-de-relaci\xf3n-entre-facturas",level:2},{value:"Cuando el costo de alguna transacci\xf3n aumenta posterior a la venta",id:"cuando-el-costo-de-alguna-transacci\xf3n-aumenta-posterior-a-la-venta",level:3},{value:"Cuando se realiza un descuento",id:"cuando-se-realiza-un-descuento",level:3},{value:"Devoluciones",id:"devoluciones",level:3},{value:"Cancelaci\xf3n de un CFDI previo",id:"cancelaci\xf3n-de-un-cfdi-previo",level:3}],d={toc:l};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relaci\xf3n-entre-cfdis"},"Relaci\xf3n entre CFDIs"),(0,o.kt)("p",null,'Adem\xe1s de los distintos tipos de comprobantes, existe un concepto conocido como "CFDI Relacionado" utilizado cuando se necesita emitir informaci\xf3n complementaria sobre una transacci\xf3n realizada.'),(0,o.kt)("h2",{id:"algunos-ejemplos-de-relaci\xf3n-entre-facturas"},"Algunos Ejemplos de relaci\xf3n entre facturas"),(0,o.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, descripciiones\ndetalladas de cada campo y los cat\xe1logos m\xe1s utilizados consulta la\n",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura"),"."),(0,o.kt)("h3",{id:"cuando-el-costo-de-alguna-transacci\xf3n-aumenta-posterior-a-la-venta"},"Cuando el costo de alguna transacci\xf3n aumenta posterior a la venta"),(0,o.kt)("p",null,"Cuando se emiti\xf3 previamente un comprobante pero hubo un aumento por ejemplo en el precio de los insumos, pueden relacionarse facturas para amparar dicho aumento"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))),(0,o.kt)("h3",{id:"cuando-se-realiza-un-descuento"},"Cuando se realiza un descuento"),(0,o.kt)("p",null,"En el momento de realizar una venta con descuento, se puede emitir un CFDI de egreso para que dicha bonificaci\xf3n sea deducible"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))),(0,o.kt)("h3",{id:"devoluciones"},"Devoluciones"),(0,o.kt)("p",null,"Existen escenarios donde se emiti\xf3 una factura, para estos casos se debe emitir un comprobante de egreso y relacionarlo con el comprobante de ingreso original"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))),(0,o.kt)("h3",{id:"cancelaci\xf3n-de-un-cfdi-previo"},"Cancelaci\xf3n de un CFDI previo"),(0,o.kt)("p",null,"Cuando una factura es cancelada y se emite una nueva, es posible relacionarla para indicar que el nuevo CFDI es el reemplazo de un comprobante anterior"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))))}u.isMDXComponent=!0}}]);