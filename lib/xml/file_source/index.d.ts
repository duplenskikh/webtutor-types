interface FileSourceTopElem extends XmlTopElem<FileSourceDocument>, WebVariablesBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  url?: XmlElem<string>;
  search_available?: XmlElem<boolean>;
  selection_available?: XmlElem<boolean>;
  run_code?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  access?: XmlElem<AccessDocBase>;
}

type FileSourceDocument = XmlDocument<FileSourceTopElem>;
