type PluginCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  block: XmlElem<string | null, typeof common.access_block_types>;
  plugin_id: XmlElem<string | null>;
  version: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};
