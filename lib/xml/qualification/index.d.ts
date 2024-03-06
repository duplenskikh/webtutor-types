interface QualificationDocumentRewardParams {
  sum: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  receivers_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  script: XmlElem<string>;
  block_from_common_params: XmlElem<boolean>;
  can_not_transmit_twice: XmlElem<boolean>;
  can_not_transmit_to_sender: XmlElem<boolean>;
  can_not_transmit_to_manager: XmlElem<boolean>;
  available_rewards_num: XmlElem<number>;
  exception_group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  fill_from_common_params: XmlElem<boolean>;
  reason: XmlElem<string>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  min_symbols_num: XmlElem<number>;
  min_words_num: XmlElem<number>;
}

interface QualificationDocumentCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface QualificationDocumentAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface QualificationDocumentEducationMethod {
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
}

interface QualificationDocumentCompoundProgram {
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
}

interface QualificationDocumentQualification {
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
}

interface QualificationDocumentAssessmentAppraise {
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
}

interface QualificationDocumentEvalCondition {
  id: XmlElem<string>;
  name: XmlElem<string>;
  eval_str: XmlElem<string>;
  max_value: XmlElem<number>;
}

type QualificationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
GameBonusBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
KnowledgePartsBase & {
  Doc: QualificationDocument;
  join_mode: XmlElem<string, typeof common.join_mode_types>;
  level_id: XmlElem<number, LevelCatalogDocumentTopElem>;
  parent_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.qualification_statuss>;
  test_on_hire: XmlElem<boolean>;
  days_for_check: XmlElem<number>;
  term_days: XmlElem<number>;
  expires_days: XmlElem<number>;
  yourself_start: XmlElem<boolean>;
  is_reward: XmlElem<boolean>;
  work_experience_type: XmlElem<string>;
  condition_type: XmlElem<string>;
  condition_value: XmlElem<number>;
  period_type: XmlElem<string>;
  is_active: XmlElem<boolean>;
  reward_params: XmlElem<QualificationDocumentRewardParams>;
  courses: XmlMultiElem<QualificationDocumentCourse>;
  assessments: XmlMultiElem<QualificationDocumentAssessment>;
  education_methods: XmlMultiElem<QualificationDocumentEducationMethod>;
  compound_programs: XmlMultiElem<QualificationDocumentCompoundProgram>;
  qualifications: XmlMultiElem<QualificationDocumentQualification>;
  assessment_appraises: XmlMultiElem<QualificationDocumentAssessmentAppraise>;
  allow_assign(): unknown;
  eval_conditions: XmlMultiElem<QualificationDocumentEvalCondition>;
  eval_assignment_query: XmlElem<string>;
  get_assignment_persons(): unknown;
  get_scaled_progress(iPersonIDParam: number, oParam: unknown): unknown;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type QualificationDocument = XmlDocument & {
  TopElem: QualificationDocumentTopElem;
  qualification: QualificationDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
