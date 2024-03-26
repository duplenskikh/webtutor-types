type EstaffEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code_event: XmlElem<string>;
  event_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  vacancy_code: XmlElem<string>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  estaff_event_type_id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
  estaff_event_type_name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  objects: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  linked_object_url: XmlElem<string>;
  event_status_id: XmlElem<string, typeof common.estaff_event_status_types>;
  estaff_event_eid: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
