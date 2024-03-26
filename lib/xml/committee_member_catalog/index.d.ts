type CommitteeMemberCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  boss_type_id: XmlElem<number, BossTypeCatalogDocumentTopElem>;
  personnel_committee_id: XmlElem<number, PersonnelCommitteeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.committee_member_status_types>;
  committee_member_type: XmlElem<string, typeof common.committee_member_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
