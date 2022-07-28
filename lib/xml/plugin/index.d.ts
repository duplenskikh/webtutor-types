interface PluginDocumentHistoryLog {
  install_date?: XmlElem<Date>;
  version?: XmlElem<number>;
  person_id?: XmlElem<number>;
}

type PluginDocumentTopElem = XmlTopElem & { Doc: PluginDocument } & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  block?: XmlElem<string>;
  plugin_id?: XmlElem<string>;
  version?: XmlElem<number>;
  history_logs?: XmlMultiElem<PluginDocumentHistoryLog>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type PluginDocument = XmlDocument & { TopElem: PluginDocumentTopElem; };
