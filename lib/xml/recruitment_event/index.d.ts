type RecruitmentEventDocumentTopElem = XmlTopElem &
CatalogListBase &
FileListBase &
AdminAccessBase & {
  Doc: RecruitmentEventDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_status_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecruitmentEventDocument = XmlDocument & {
  TopElem: RecruitmentEventDocumentTopElem;
  recruitment_event: RecruitmentEventDocumentTopElem;
  DocDesc(): string;
  OnInit(): void;
};
