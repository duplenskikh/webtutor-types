interface DnTrainMethodComplexDocumentControlForm {
  form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
}

interface DnTrainMethodComplexDocumentEducatEvent {
  form_id: XmlElem<number, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<string>;
}

interface DnTrainMethodComplexDocumentHoursTerm {
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
  hours_week: XmlElem<string>;
}

interface DnTrainMethodComplexDocumentCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface DnTrainMethodComplexDocumentAssessment {
  assessm_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
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
  facult_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  program_discipline_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  program_discipline_name: XmlElem<string>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
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
