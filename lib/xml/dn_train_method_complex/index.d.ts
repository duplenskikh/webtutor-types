interface DnTrainMethodComplexDocumentControlForm {
  form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
}

interface DnTrainMethodComplexDocumentEducatEvent {
  form_id: XmlElem<number | null, DnEducatEventCatalogDocumentTopElem>;
  hours: XmlElem<string | null>;
}

interface DnTrainMethodComplexDocumentHoursTerm {
  term_id: XmlElem<number | null, DnTermCatalogDocumentTopElem>;
  hours_week: XmlElem<string | null>;
}

interface DnTrainMethodComplexDocumentCourse {
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
}

interface DnTrainMethodComplexDocumentAssessment {
  assessm_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface DnTrainMethodComplexDocumentItem {
  item_id: XmlElem<number | null>;
}

type DnTrainMethodComplexDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnTrainMethodComplexDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  facult_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  program_discipline_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  program_discipline_name: XmlElem<string | null>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  control_forms: XmlMultiElem<DnTrainMethodComplexDocumentControlForm | null>;
  educat_events: XmlMultiElem<DnTrainMethodComplexDocumentEducatEvent | null>;
  hours_terms: XmlMultiElem<DnTrainMethodComplexDocumentHoursTerm | null>;
  courses: XmlMultiElem<DnTrainMethodComplexDocumentCourse | null>;
  assessments: XmlMultiElem<DnTrainMethodComplexDocumentAssessment | null>;
  items: XmlMultiElem<DnTrainMethodComplexDocumentItem | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnTrainMethodComplexDocument = XmlDocument & {
  TopElem: DnTrainMethodComplexDocumentTopElem;
  dn_train_method_complex: DnTrainMethodComplexDocumentTopElem;
  DocDesc(): string;
};
