type DnLessonCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lesson_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.lesson_states>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  educat_event_form_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  auditorium_id: XmlElem<number, DnAuditoriumCatalogDocumentTopElem>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
