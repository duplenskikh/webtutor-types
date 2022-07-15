interface DnWorkCurriculumBlockElemDisciplineTerm {
  id_term?: XmlElem<number>;
  term_hours?: XmlElem<number>;
}

interface DnWorkCurriculumBlockElemDiscipline {
  discipl_id?: XmlElem<number>;
  loading?: XmlElem<number>;
  auditor?: XmlElem<number>;
  independ?: XmlElem<number>;
  load_credit?: XmlElem<number>;
  audit_credit?: XmlElem<number>;
  independ_credit?: XmlElem<number>;
  term_id?: XmlElem<number>;
  control_form_id?: XmlElem<number>;
  name_control_form?: XmlElem<string>;
  is_choice?: XmlElem<boolean>;
  terms?: XmlMultiElem<DnWorkCurriculumBlockElemDisciplineTerm>;
}

interface DnWorkCurriculumBlockElem {
  id_block?: XmlElem<number>;
  name?: XmlElem<string>;
  load_block?: XmlElem<number>;
  all_auditor?: XmlElem<number>;
  all_independ?: XmlElem<number>;
  load_cred_block?: XmlElem<number>;
  all_cred_auditor?: XmlElem<number>;
  all_cred_indep?: XmlElem<number>;
  disciplines?: XmlMultiElem<DnWorkCurriculumBlockElemDiscipline>;
}

interface DnWorkCurriculumView {
  part_index?: XmlElem<number>;
}

interface DnWorkCurriculumTopElem extends XmlTopElem<DnWorkCurriculumDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status_id?: XmlElem<string>;
  type?: XmlElem<string>;
  student_id?: XmlElem<number>;
  academ_year_id?: XmlElem<number>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  special_id?: XmlElem<number>;
  specialization_id?: XmlElem<number>;
  qualification_id?: XmlElem<number>;
  educat_form_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  block_elems?: XmlMultiElem<DnWorkCurriculumBlockElem>;
  view?: XmlElem<DnWorkCurriculumView>;
}

type DnWorkCurriculumDocument = XmlDocument<DnWorkCurriculumTopElem>;
