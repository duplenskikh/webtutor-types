type PersonnelCommitteeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
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
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};
