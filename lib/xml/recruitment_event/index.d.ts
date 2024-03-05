type RecruitmentEventDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
AdminAccessBase & {
  Doc: RecruitmentEventDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  estaff_event_type_id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_status_id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number, RecruitmentSystemCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type RecruitmentEventDocument = XmlDocument & {
  TopElem: RecruitmentEventDocumentTopElem;
};
