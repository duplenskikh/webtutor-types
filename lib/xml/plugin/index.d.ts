interface PluginHistoryLog {
  install_date?: XmlElem<Date>;
  version?: XmlElem<number>;
  person_id?: XmlElem<number>;
}

interface PluginView {
  is_edit_mode?: XmlElem<boolean>;
  selector?: XmlElem<string>;
}

interface PluginTopElem extends XmlTopElem<PluginDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  block?: XmlElem<string>;
  plugin_id?: XmlElem<string>;
  version?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  history_logs?: XmlMultiElem<PluginHistoryLog>;
  view?: XmlElem<PluginView>;
}

type PluginDocument = XmlDocument<PluginTopElem>;
