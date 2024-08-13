type DnLessonCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  lesson_date: XmlElem<Date | null>;
  status_id: XmlElem<string | null, typeof common.lesson_states>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  educat_event_form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  auditorium_id: XmlElem<number | null, DnAuditoriumCatalogDocumentTopElem>;
  stream_id: XmlElem<number | null, DnStreamCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
