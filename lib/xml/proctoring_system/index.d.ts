interface ProctoringSystemTopElem extends XmlTopElem<ProctoringSystemDocument>, AdminAccessBase, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  library_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  get_setting?(): any;
  get_settings?(): any;
}

type ProctoringSystemDocument = XmlDocument<ProctoringSystemTopElem>;
