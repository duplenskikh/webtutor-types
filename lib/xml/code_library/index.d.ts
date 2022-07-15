interface CodeLibraryView {
}

interface CodeLibraryTopElem extends XmlTopElem<CodeLibraryDocument>, ObjectCodeNameBase, ExecCodeBase, WebVariablesBase {
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<CodeLibraryView>;
}

type CodeLibraryDocument = XmlDocument<CodeLibraryTopElem>;
