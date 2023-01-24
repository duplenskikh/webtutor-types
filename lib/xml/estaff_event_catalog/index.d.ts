type EstaffEventCatalogDocumentTopElem = XmlTopElem & { Doc: EstaffEventCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code_event: XmlElem<string>;
  event_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  vacancy_code: XmlElem<string>;
  request_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  estaff_event_type_id: XmlElem<number>;
  estaff_event_type_name: XmlElem<string>;
  object_type: XmlElem<string>;
  objects: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  linked_object_url: XmlElem<string>;
  event_status_id: XmlElem<string>;
  estaff_event_eid: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EstaffEventCatalogDocument = XmlDocument & { TopElem: EstaffEventCatalogDocumentTopElem; };
