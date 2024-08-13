type CommitteeMemberCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  personnel_committee_id: XmlElem<number | null, PersonnelCommitteeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.committee_member_status_types>;
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
