type PersonnelCommitteeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string | null, typeof common.personnel_committee_status_types>;
  participants_status: XmlElem<string, typeof common.committee_member_status_types>;
  creation_date: XmlElem<Date | null>;
  committee_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
