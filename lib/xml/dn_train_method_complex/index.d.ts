interface DnTrainMethodComplexControlForm {
  form_id?: XmlElem<number>;
  term_id?: XmlElem<number>;
}

interface DnTrainMethodComplexEducatEvent {
  form_id?: XmlElem<number>;
  hours?: XmlElem<string>;
}

interface DnTrainMethodComplexHoursTerm {
  term_id?: XmlElem<number>;
  hours_week?: XmlElem<string>;
}

interface DnTrainMethodComplexCourse {
  course_id?: XmlElem<number>;
}

interface DnTrainMethodComplexAssessment {
  assessm_id?: XmlElem<number>;
}

interface DnTrainMethodComplexItem {
  item_id?: XmlElem<number>;
}

interface DnTrainMethodComplexTopElem extends XmlTopElem<DnTrainMethodComplexDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  facult_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  discipline_id?: XmlElem<number>;
  program_discipline_id?: XmlElem<number>;
  program_discipline_name?: XmlElem<string>;
  lector_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  control_forms?: XmlMultiElem<DnTrainMethodComplexControlForm>;
  educat_events?: XmlMultiElem<DnTrainMethodComplexEducatEvent>;
  hours_terms?: XmlMultiElem<DnTrainMethodComplexHoursTerm>;
  courses?: XmlMultiElem<DnTrainMethodComplexCourse>;
  assessments?: XmlMultiElem<DnTrainMethodComplexAssessment>;
  items?: XmlMultiElem<DnTrainMethodComplexItem>;
}

type DnTrainMethodComplexDocument = XmlDocument<DnTrainMethodComplexTopElem>;
