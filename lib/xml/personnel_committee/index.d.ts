interface PersonnelCommitteeView extends DescBase {
  participant_catalog?: XmlElem<string>;
  candidate_catalog?: XmlElem<string>;
}

interface PersonnelCommitteeTopElem extends XmlTopElem<PersonnelCommitteeDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  participants_status?: XmlElem<string>;
  creation_date?: XmlElem<Date>;
  committee_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<PersonnelCommitteeView>;
  set_status?(): any;
  start_action?(): any;
}

type PersonnelCommitteeDocument = XmlDocument<PersonnelCommitteeTopElem>;
