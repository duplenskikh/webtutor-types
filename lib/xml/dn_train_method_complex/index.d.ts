interface DnTrainMethodComplexDocumentControlForm {
  form_id: XmlElem<number>;
  term_id: XmlElem<number>;
}

interface DnTrainMethodComplexDocumentEducatEvent {
  form_id: XmlElem<number>;
  hours: XmlElem<string>;
}

interface DnTrainMethodComplexDocumentHoursTerm {
  term_id: XmlElem<number>;
  hours_week: XmlElem<string>;
}

interface DnTrainMethodComplexDocumentCourse {
  course_id: XmlElem<number>;
}

interface DnTrainMethodComplexDocumentAssessment {
  assessm_id: XmlElem<number>;
}

interface DnTrainMethodComplexDocumentItem {
  item_id: XmlElem<number>;
}

type DnTrainMethodComplexDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnTrainMethodComplexDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  facult_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  program_discipline_id: XmlElem<number>;
  program_discipline_name: XmlElem<string>;
  lector_id: XmlElem<number>;
  control_forms: XmlMultiElem<DnTrainMethodComplexDocumentControlForm>;
  educat_events: XmlMultiElem<DnTrainMethodComplexDocumentEducatEvent>;
  hours_terms: XmlMultiElem<DnTrainMethodComplexDocumentHoursTerm>;
  courses: XmlMultiElem<DnTrainMethodComplexDocumentCourse>;
  assessments: XmlMultiElem<DnTrainMethodComplexDocumentAssessment>;
  items: XmlMultiElem<DnTrainMethodComplexDocumentItem>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnTrainMethodComplexDocument = XmlDocument & {
  TopElem: DnTrainMethodComplexDocumentTopElem;
};
