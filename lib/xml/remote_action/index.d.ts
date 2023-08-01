type RemoteActionDocumentTopElem = XmlTopElem & 
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase & {
  Doc: RemoteActionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  category: XmlElem<string>;
  cache_vars: XmlElem<string>;
  catalog_name: XmlElem<string>;
  link_name: XmlElem<string>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  url: XmlElem<string>;
  script: XmlElem<string>;
  default_disp_evaluate: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  evaluate(): unknown;
  role_id: XmlMultiElem<number>;
};

type RemoteActionDocument = XmlDocument & {
  TopElem: RemoteActionDocumentTopElem;
};
