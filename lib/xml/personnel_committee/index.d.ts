type PersonnelCommitteeDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PersonnelCommitteeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.personnel_committee_status_types>;
  participants_status: XmlElem<string, typeof common.committee_member_status_types>;
  creation_date: XmlElem<Date | null>;
  committee_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  access: XmlElem<AccessDocBase | null>;
  set_status(newStatus: string, sendNotifications: boolean, screen: unknown): void;
  start_action(type: string): number;
};

type PersonnelCommitteeDocument = XmlDocument & {
  TopElem: PersonnelCommitteeDocumentTopElem;
  personnel_committee: PersonnelCommitteeDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
