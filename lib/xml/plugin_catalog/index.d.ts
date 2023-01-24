type PluginCatalogDocumentTopElem = XmlTopElem & { Doc: PluginCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  block: XmlElem<string>;
  plugin_id: XmlElem<string>;
  version: XmlElem<number>;
  modification_date: XmlElem<Date>;
}

type PluginCatalogDocument = XmlDocument & { TopElem: PluginCatalogDocumentTopElem; };
