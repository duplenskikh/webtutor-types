type PersonnelCommitteeDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelCommitteeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.personnel_committee_status_types>;
  participants_status: XmlElem<string, typeof common.committee_member_status_types>;
  creation_date: XmlElem<Date>;
  committee_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
  access: XmlElem<AccessDocBase>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): unknown;
  start_action(type: string): unknown;
};

type PersonnelCommitteeDocument = XmlDocument & {
  TopElem: PersonnelCommitteeDocumentTopElem;
  personnel_committee: PersonnelCommitteeDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
