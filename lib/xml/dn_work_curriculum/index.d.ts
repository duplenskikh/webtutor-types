interface DnWorkCurriculumDocumentBlockElemDisciplineTerm {
  id_term: XmlElem<number, DnTermCatalogDocumentTopElem>;
  term_hours: XmlElem<number>;
}

interface DnWorkCurriculumDocumentBlockElemDiscipline {
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  loading(): unknown;
  auditor: XmlElem<number>;
  independ: XmlElem<number>;
  load_credit(): unknown;
  audit_credit: XmlElem<number>;
  independ_credit: XmlElem<number>;
  term_id: XmlElem<number, DnTermCatalogDocumentTopElem>;
  control_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  name_control_form: XmlElem<string>;
  is_choice: XmlElem<boolean>;
  terms: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDisciplineTerm>;
}

interface DnWorkCurriculumDocumentBlockElem {
  id_block: XmlElem<number, DnBlockDisciplineCatalogDocumentTopElem>;
  name: XmlElem<string>;
  load_block(): unknown;
  all_auditor(): unknown;
  all_independ(): unknown;
  load_cred_block(): unknown;
  all_cred_auditor(): unknown;
  all_cred_indep(): unknown;
  disciplines: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDiscipline>;
}

type DnWorkCurriculumDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnWorkCurriculumDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  type: XmlElem<string, typeof common.curriculum_types>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number, DnEducatFormCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  block_elems: XmlMultiElem<DnWorkCurriculumDocumentBlockElem>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnWorkCurriculumDocument = XmlDocument & {
  TopElem: DnWorkCurriculumDocumentTopElem;
};
