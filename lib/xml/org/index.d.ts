interface OrgViewFilter extends AuFtFilter {
}

interface OrgView extends DescBase {
  do_update_document_persons?: XmlElem<boolean>;
  filter?: XmlElem<OrgViewFilter>;
}

interface OrgTopElem extends XmlTopElem<OrgDocument>, OrgBase, FileListBase, FuncManagersBase, KnowledgePartsBase, KnowledgePartsBaseOld, DocumentPersonsBase, CustomElemsBase {
  account_id?: XmlElem<number>;
  contract_num?: XmlElem<string>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  show_detailed?: XmlElem<boolean>;
  show_children?: XmlElem<boolean>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<OrgView>;
  start_action?(): any;
}

type OrgDocument = XmlDocument<OrgTopElem>;
