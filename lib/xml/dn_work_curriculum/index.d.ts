interface DnWorkCurriculumDocumentBlockElemDisciplineTerm {
  id_term: XmlElem<number>;
  term_hours: XmlElem<number>;
}
interface DnWorkCurriculumDocumentBlockElemDiscipline {
  discipl_id: XmlElem<number>;
  loading(): number;
  auditor: XmlElem<number>;
  independ: XmlElem<number>;
  load_credit(): number;
  audit_credit: XmlElem<number>;
  independ_credit: XmlElem<number>;
  term_id: XmlElem<number>;
  control_form_id: XmlElem<number>;
  name_control_form: XmlElem<string>;
  is_choice: XmlElem<boolean>;
  terms: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDisciplineTerm>;
}
interface DnWorkCurriculumDocumentBlockElem {
  id_block: XmlElem<number>;
  name: XmlElem<string>;
  load_block(): number;
  all_auditor(): number;
  all_independ(): number;
  load_cred_block(): number;
  all_cred_auditor(): number;
  all_cred_indep(): number;
  disciplines: XmlMultiElem<DnWorkCurriculumDocumentBlockElemDiscipline>;
}

type DnWorkCurriculumDocumentTopElem = XmlTopElem & { Doc: DnWorkCurriculumDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string>;
  type: XmlElem<string>;
  student_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  qualification_id: XmlElem<number>;
  educat_form_id: XmlElem<number>;
  comment: XmlElem<string>;
  block_elems: XmlMultiElem<DnWorkCurriculumDocumentBlockElem>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnWorkCurriculumDocument = XmlDocument & { TopElem: DnWorkCurriculumDocumentTopElem; };
