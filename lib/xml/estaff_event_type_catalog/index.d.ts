type EstaffEventTypeCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  event_type_estaff_id: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number, RecruitmentSystemCatalogDocumentTopElem>;
  position_commons: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
