interface DnLessonStudGroup {
  group_id?: XmlElem<number>;
}

interface DnLessonStudWork {
  work_id?: XmlElem<string>;
  student_id?: XmlElem<number>;
  work_state_id?: XmlElem<string>;
  work_date?: XmlElem<Date>;
  mark?: XmlElem<number>;
}

interface DnLessonRegistrStudent {
  stud_id?: XmlElem<number>;
  is_presence?: XmlElem<boolean>;
  mark?: XmlElem<number>;
  lector_comment?: XmlElem<string>;
}

interface DnLessonStudent {
  student_id?: XmlElem<number>;
}

interface DnLessonViewFilter extends AuFtFilter {
}

interface DnLessonView extends DescBase {
  filter?: XmlElem<DnLessonViewFilter>;
}

interface DnLessonTopElem extends XmlTopElem<DnLessonDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  discipline_id?: XmlElem<number>;
  lesson_date?: XmlElem<Date>;
  status_id?: XmlElem<string>;
  lector_id?: XmlElem<number>;
  educat_event_form_id?: XmlElem<number>;
  auditorium_id?: XmlElem<number>;
  stream_id?: XmlElem<number>;
  deliv_date?: XmlElem<Date>;
  doc_info?: XmlElem<DocInfoBase>;
  stud_groups?: XmlMultiElem<DnLessonStudGroup>;
  stud_works?: XmlMultiElem<DnLessonStudWork>;
  registr_students?: XmlMultiElem<DnLessonRegistrStudent>;
  students?: XmlMultiElem<DnLessonStudent>;
  view?: XmlElem<DnLessonView>;
}

type DnLessonDocument = XmlDocument<DnLessonTopElem>;
