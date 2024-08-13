type EstaffEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code_event: XmlElem<string | null>;
  event_name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  vacancy_code: XmlElem<string | null>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  estaff_event_type_id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_name: XmlElem<string | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  objects: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  linked_object_url: XmlElem<string | null>;
  event_status_id: XmlElem<string | null, typeof common.estaff_event_status_types>;
  estaff_event_eid: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
