type DnLessonCatalogDocumentTopElem = XmlTopElem & { Doc: DnLessonCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  lesson_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  lector_id: XmlElem<number>;
  educat_event_form_id: XmlElem<number>;
  auditorium_id: XmlElem<number>;
  stream_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnLessonCatalogDocument = XmlDocument & { TopElem: DnLessonCatalogDocumentTopElem; };
