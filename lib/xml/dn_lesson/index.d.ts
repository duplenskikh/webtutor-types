interface DnLessonDocumentStudGroup {
  group_id: XmlElem<number>;
}

interface DnLessonDocumentStudWork {
  work_id: XmlElem<string>;
  student_id: XmlElem<number>;
  work_state_id: XmlElem<string>;
  work_date: XmlElem<Date>;
  mark: XmlElem<number>;
}

interface DnLessonDocumentRegistrStudent {
  stud_id: XmlElem<number>;
  is_presence: XmlElem<boolean>;
  mark: XmlElem<number>;
  lector_comment: XmlElem<string>;
}

interface DnLessonDocumentStudent {
  student_id: XmlElem<number>;
}

type DnLessonDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnLessonDocument;
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
  stud_groups: XmlMultiElem<DnLessonDocumentStudGroup>;
  deliv_date: XmlElem<Date>;
  stud_works: XmlMultiElem<DnLessonDocumentStudWork>;
  registr_students: XmlMultiElem<DnLessonDocumentRegistrStudent>;
  students: XmlMultiElem<DnLessonDocumentStudent>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnLessonDocument = XmlDocument & {
  TopElem: DnLessonDocumentTopElem;
};
