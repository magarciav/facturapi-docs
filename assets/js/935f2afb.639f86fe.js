"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Inicio r\xe1pido","href":"/docs/quickstart","docId":"quickstart"},{"type":"category","label":"C\xf3mo empezar","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introducci\xf3n","href":"/docs/getting-started/intro","docId":"getting-started/intro"},{"type":"link","label":"Conceptos","href":"/docs/getting-started/concepts","docId":"getting-started/concepts"},{"type":"link","label":"Instalaci\xf3n","href":"/docs/getting-started/install","docId":"getting-started/install"},{"type":"link","label":"Autenticaci\xf3n","href":"/docs/getting-started/authenticate","docId":"getting-started/authenticate"}]},{"type":"category","label":"Gu\xedas","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Clientes","href":"/docs/guides/customers","docId":"guides/customers"},{"type":"link","label":"Productos","href":"/docs/guides/products","docId":"guides/products"},{"type":"category","label":"CFDI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Ingreso","href":"/docs/guides/invoices/ingreso","docId":"guides/invoices/ingreso"},{"type":"link","label":"Pago","href":"/docs/guides/invoices/pago","docId":"guides/invoices/pago"},{"type":"link","label":"Egreso","href":"/docs/guides/invoices/egreso","docId":"guides/invoices/egreso"},{"type":"link","label":"N\xf3mina","href":"/docs/guides/invoices/nomina","docId":"guides/invoices/nomina"},{"type":"link","label":"Traslado","href":"/docs/guides/invoices/traslado","docId":"guides/invoices/traslado"},{"type":"link","label":"Retenciones","href":"/docs/guides/invoices/retencion","docId":"guides/invoices/retencion"},{"type":"link","label":"Complementos","href":"/docs/guides/invoices/complementos","docId":"guides/invoices/complementos"},{"type":"link","label":"Relacionados","href":"/docs/guides/invoices/relacionados","docId":"guides/invoices/relacionados"}],"href":"/docs/guides/invoices/"},{"type":"link","label":"Organizaciones (Multi-RFC)","href":"/docs/guides/organizations","docId":"guides/organizations"},{"type":"link","label":"Recibos digitales","href":"/docs/guides/receipts","docId":"guides/receipts"},{"type":"link","label":"Autofactura","href":"/docs/guides/self-invoice","docId":"guides/self-invoice"}]},{"type":"category","label":"Avanzado","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Formato de fechas","href":"/docs/advanced/dates","docId":"advanced/dates"}]},{"type":"link","label":"Migrar de v1 a v2","href":"/docs/migrate","docId":"migrate"}]},"docs":{"advanced/dates":{"id":"advanced/dates","title":"Formato de fechas","description":"Aunque nuestra recomendaci\xf3n es enviar un string con la fecha en UTC y en formato","sidebar":"tutorialSidebar"},"getting-started/authenticate":{"id":"getting-started/authenticate","title":"Autenticaci\xf3n","description":"Para poder llamar a cualquier m\xe9todo de la API, necesitar\xe1s identificarte","sidebar":"tutorialSidebar"},"getting-started/concepts":{"id":"getting-started/concepts","title":"Conceptos","description":"Si esta es tu primera vez integrando la API de Facturapi, te recomendamos familiarizarte con los siguientes conceptos, los cuales te ayudar\xe1n a entender mejor el flujo de integraci\xf3n.","sidebar":"tutorialSidebar"},"getting-started/install":{"id":"getting-started/install","title":"Instalaci\xf3n","description":"Realizar la instalaci\xf3n utilizando una de nuestras librer\xedas","sidebar":"tutorialSidebar"},"getting-started/intro":{"id":"getting-started/intro","title":"Introducci\xf3n","description":"Facturapi es la primera REST API de facturaci\xf3n electr\xf3nica en M\xe9xico que redise\xf1a y simplifica la emisi\xf3n y env\xedo de CFDI.","sidebar":"tutorialSidebar"},"guides/customers":{"id":"guides/customers","title":"Clientes","description":"Registrar a tu clientes en Facturapi te permite validar sus datos fiscales y","sidebar":"tutorialSidebar"},"guides/invoices/complementos":{"id":"guides/invoices/complementos","title":"Complementos","description":"","sidebar":"tutorialSidebar"},"guides/invoices/egreso":{"id":"guides/invoices/egreso","title":"Egreso","description":"El Comprobante de egreso, conocido anteriormente como nota de cr\xe9dito, se utiliza para","sidebar":"tutorialSidebar"},"guides/invoices/index":{"id":"guides/invoices/index","title":"CFDI","description":"Existen 6 tipos de CFDI, pueden incluir complementos o relacionarse entre ellos:","sidebar":"tutorialSidebar"},"guides/invoices/ingreso":{"id":"guides/invoices/ingreso","title":"Ingreso","description":"El Comprobante de Ingreso, tambi\xe9n conocido simplemente como factura, se utiliza para","sidebar":"tutorialSidebar"},"guides/invoices/nomina":{"id":"guides/invoices/nomina","title":"N\xf3mina","description":"Un comprobante de n\xf3mina se utiliza para dar constancia que avale el pago ante la legislaci\xf3n laboral.","sidebar":"tutorialSidebar"},"guides/invoices/pago":{"id":"guides/invoices/pago","title":"Pago","description":"El Comprobante de Pago, tambi\xe9n llamado Recibo Electr\xf3nico de Pago (REP), _comprobante al que se le","sidebar":"tutorialSidebar"},"guides/invoices/relacionados":{"id":"guides/invoices/relacionados","title":"Relacionados","description":"Adem\xe1s de los distintos tipos de comprobantes, existe un concepto conocido como \\"CFDI Relacionado\\" utilizado cuando se necesita emitir informaci\xf3n complementaria sobre una transacci\xf3n realizada.","sidebar":"tutorialSidebar"},"guides/invoices/retencion":{"id":"guides/invoices/retencion","title":"Retenciones","description":"Pr\xf3ximamente","sidebar":"tutorialSidebar"},"guides/invoices/traslado":{"id":"guides/invoices/traslado","title":"Traslado","description":"Una factura de traslado (antes conocida como \\"carta de transporte\\") es un comprobante donde se listan las mercanc\xedas que ser\xe1n transportadas, este CFDI es requerido para amparar dicho traslado.","sidebar":"tutorialSidebar"},"guides/organizations":{"id":"guides/organizations","title":"Organizaciones (Multi-RFC)","description":"Registra m\xe1s organizaciones emisoras","sidebar":"tutorialSidebar"},"guides/products":{"id":"guides/products","title":"Productos","description":"Registrar tu cat\xe1logo de productos o servicios en Facturapi te permite almacenar","sidebar":"tutorialSidebar"},"guides/receipts":{"id":"guides/receipts","title":"Recibos digitales","description":"Un recibo, conocido como ticket o nota de venta, es un comprobante de pago que puedes darle a tu","sidebar":"tutorialSidebar"},"guides/self-invoice":{"id":"guides/self-invoice","title":"Autofactura","description":"Facturapi te permite tener un micrositio con el logotipo de tu empresa y tus","sidebar":"tutorialSidebar"},"migrate":{"id":"migrate","title":"Migrar de v1 a v2","description":"Cambios generales","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Inicio r\xe1pido","description":"Te damos la bienvenida a esta gu\xeda de inicio r\xe1pido donde se muestran los campos m\xednimos requeridos para crear una factura de tipo Ingreso en una sola llamada.","sidebar":"tutorialSidebar"}}}')}}]);