type OrgDocumentTopElem = XmlTopElem & { Doc: OrgDocument } & 
OrgBase &
FileListBase &
FuncManagersBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
DocumentPersonsBase &
CustomElemsBase & {
  account_id: XmlElem<number>;
  contract_num: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  lng_id: XmlElem<string>;
  location_id: XmlElem<string>;
  place_id: XmlElem<number>;
  region_id: XmlElem<number>;
  access_time_start: XmlElem<string>;
  access_time_end: XmlElem<string>;
  show_detailed: XmlElem<boolean>;
  show_children: XmlElem<boolean>;
  kpi_profile_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  start_action?(): unknown;
  role_id: XmlMultiElem<number>;
}

type OrgDocument = XmlDocument & {
  TopElem: OrgDocumentTopElem;
};
