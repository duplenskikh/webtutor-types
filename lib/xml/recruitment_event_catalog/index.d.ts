type RecruitmentEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_status_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
