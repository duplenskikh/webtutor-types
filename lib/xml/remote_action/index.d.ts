interface RemoteActionView {
  referer_url?: XmlElem<string>;
}

interface RemoteActionTopElem extends XmlTopElem<RemoteActionDocument>, ExecCodeBase, WebVariablesBase, ResultFieldsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  category?: XmlElem<string>;
  cache_vars?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  link_name?: XmlElem<string>;
  show_in_list?: XmlElem<boolean>;
  show_in_form?: XmlElem<boolean>;
  url?: XmlElem<string>;
  script?: XmlElem<string>;
  default_disp_evaluate?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  converter?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<RemoteActionView>;
  access?: XmlElem<AccessDocBase>;
  evaluate?(): any;
}

type RemoteActionDocument = XmlDocument<RemoteActionTopElem>;
