interface DnLessonDocumentStudGroup {
  group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
}

interface DnLessonDocumentStudWork {
  work_id: XmlElem<string>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  work_state_id: XmlElem<string, typeof common.stud_work_states>;
  work_date: XmlElem<Date>;
  mark: XmlElem<number>;
}

interface DnLessonDocumentRegistrStudent {
  stud_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  is_presence: XmlElem<boolean>;
  mark: XmlElem<number>;
  lector_comment: XmlElem<string>;
}

interface DnLessonDocumentStudent {
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
}

type DnLessonDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnLessonDocument;
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
  stud_groups: XmlMultiElem<DnLessonDocumentStudGroup>;
  deliv_date: XmlElem<Date>;
  stud_works: XmlMultiElem<DnLessonDocumentStudWork>;
  registr_students: XmlMultiElem<DnLessonDocumentRegistrStudent>;
  students: XmlMultiElem<DnLessonDocumentStudent>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnLessonDocument = XmlDocument & {
  TopElem: DnLessonDocumentTopElem;
  dn_lesson: DnLessonDocumentTopElem;
  DocDesc(): unknown;
};
