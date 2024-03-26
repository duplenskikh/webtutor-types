type PluginCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  block: XmlElem<string, typeof common.access_block_types>;
  plugin_id: XmlElem<string>;
  version: XmlElem<number>;
  modification_date: XmlElem<Date>;
  OnBuild(): void;
};
