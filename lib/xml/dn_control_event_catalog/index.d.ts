type DnControlEventCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  date_event: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.lesson_states>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  control_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  lesson_id: XmlElem<number, DnLessonCatalogDocumentTopElem>;
  stream_id: XmlElem<number, DnStreamCatalogDocumentTopElem>;
  stud_group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
