interface QualificationCourse {
  course_id?: XmlElem<number>;
}

interface QualificationAssessment {
  assessment_id?: XmlElem<number>;
}

interface QualificationEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface QualificationCompoundProgram {
  compound_program_id?: XmlElem<number>;
}

interface QualificationQualification {
  qualification_id?: XmlElem<number>;
}

interface QualificationAssessmentAppraise {
  assessment_appraise_id?: XmlElem<number>;
}

interface QualificationEvalCondition {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  eval_str?: XmlElem<string>;
  max_value?: XmlElem<number>;
}

interface QualificationView extends DescBase {
  tab_selector?: XmlElem<string>;
}

interface QualificationTopElem extends XmlTopElem<QualificationDocument>, ObjectCodeNameBase, GameBonusBase, FileListBase, AdminAccessBase, CustomElemsBase, KnowledgePartsBase {
  join_mode?: XmlElem<string>;
  level_id?: XmlElem<number>;
  parent_id?: XmlElem<number>;
  status?: XmlElem<string>;
  test_on_hire?: XmlElem<boolean>;
  days_for_check?: XmlElem<number>;
  term_days?: XmlElem<number>;
  expires_days?: XmlElem<number>;
  yourself_start?: XmlElem<boolean>;
  eval_assignment_query?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  courses?: XmlMultiElem<QualificationCourse>;
  assessments?: XmlMultiElem<QualificationAssessment>;
  education_methods?: XmlMultiElem<QualificationEducationMethod>;
  compound_programs?: XmlMultiElem<QualificationCompoundProgram>;
  qualifications?: XmlMultiElem<QualificationQualification>;
  assessment_appraises?: XmlMultiElem<QualificationAssessmentAppraise>;
  eval_conditions?: XmlMultiElem<QualificationEvalCondition>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<QualificationView>;
  allow_assign?(): any;
  get_assignment_persons?(): any;
  get_scaled_progress?(): any;
}

type QualificationDocument = XmlDocument<QualificationTopElem>;
