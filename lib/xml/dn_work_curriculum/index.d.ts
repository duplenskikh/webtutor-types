interface DnWorkCurriculumDocumentBlockElemDisciplineTerm {
  id_term: XmlElem<number, DnTermCatalogDocumentTopElem>;
  term_hours: XmlElem<number>;
}

interface DnWorkCurriculumDocumentBlockElemDiscipline {
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  loading(): number;
  auditor: XmlElem<number>;
  independ: XmlElem<number>;
  load_credit(): number;
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
  load_block(): number;
  all_auditor(): number;
  all_independ(): number;
  load_cred_block(): number;
  all_cred_auditor(): number;
  all_cred_indep(): number;
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
  dn_work_curriculum: DnWorkCurriculumDocumentTopElem;
  DocDesc(): string;
};
