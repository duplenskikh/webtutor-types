type DnControlEventCatalogDocumentTopElem = XmlTopElem & { Doc: DnControlEventCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date_event: XmlElem<Date>;
  status_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipl_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  control_form_id: XmlElem<number>;
  lesson_id: XmlElem<number>;
  stream_id: XmlElem<number>;
  stud_group_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnControlEventCatalogDocument = XmlDocument & { TopElem: DnControlEventCatalogDocumentTopElem; };
