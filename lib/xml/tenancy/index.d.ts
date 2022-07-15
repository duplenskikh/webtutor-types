interface TenancyLimit {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  limit?: XmlElem<number>;
  object_type?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface TenancyHost {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface TenancyView extends DescBase {
  disabled?: XmlElem<boolean>;
}

interface TenancyTopElem extends XmlTopElem<TenancyDocument>, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  creator_fullname?: XmlElem<string>;
  creator_id?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  manager_id?: XmlElem<number>;
  storage_exists?: XmlElem<boolean>;
  storage_login?: XmlElem<string>;
  storage_key?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  limits?: XmlMultiElem<TenancyLimit>;
  hosts?: XmlMultiElem<TenancyHost>;
  view?: XmlElem<TenancyView>;
}

type TenancyDocument = XmlDocument<TenancyTopElem>;
