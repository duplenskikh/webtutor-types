type RecruitmentEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  estaff_event_type_id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_status_id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number, RecruitmentSystemCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
