interface PluginDocumentHistoryLog {
  install_date: XmlElem<Date | null>;
  version: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type PluginDocumentTopElem = XmlTopElem & {
  Doc: PluginDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  block: XmlElem<string | null, typeof common.access_block_types>;
  plugin_id: XmlElem<string | null>;
  version: XmlElem<number | null>;
  history_logs: XmlMultiElem<PluginDocumentHistoryLog | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PluginDocument = XmlDocument & {
  TopElem: PluginDocumentTopElem;
  plugin: PluginDocumentTopElem;
  DocDesc(): string;
};
