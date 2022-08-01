type PersonnelCommitteeDocumentTopElem = XmlTopElem & { Doc: PersonnelCommitteeDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
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
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
  set_status?(): unknown;
  start_action?(): unknown;
}

type PersonnelCommitteeDocument = XmlDocument & { TopElem: PersonnelCommitteeDocumentTopElem; };
