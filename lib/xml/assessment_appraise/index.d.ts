interface AssessmentAppraiseDocumentAuditory {
  person_id: XmlElem<number>;
  person_name: XmlElem<string>;
  position_name: XmlElem<string>;
}

interface AssessmentAppraiseDocumentGroup {
  group_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentDepartment {
  department_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentAssessmentObject {
  assessment_object_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentAssPositionCommon {
  ass_position_common_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentGrade {
  grade_id: XmlElem<number>;
  level: XmlElem<number>;
  comment: XmlElem<string>;
}

interface AssessmentAppraiseDocumentParticipantParameter {
  parameter_id: XmlElem<string>;
}

interface AssessmentAppraiseDocumentParticipantAssessmentAppraiseType extends SupplementaryQuestionsBase,
  WebVariablesBase {
  assessment_appraise_type_id: XmlElem<string>;
  competence_profile_id: XmlElem<number>;
  kpi_profile_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  flag_01: XmlElem<boolean>;
  flag_02: XmlElem<string>;
  flag_03: XmlElem<number>;
  flag_04: XmlElem<string>;
  flag_05: XmlElem<number>;
  flag_06: XmlElem<boolean>;
  flag_07: XmlElem<string>;
  formula: XmlElem<string>;
  sub_formula: XmlElem<string>;
  additional_formula: XmlElem<string>;
  is_formuled_result: XmlElem<boolean>;
  advanced_columns_formula: XmlElem<string>;
  is_formuled_result_readonly: XmlElem<boolean>;
  incrementation: XmlElem<number>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  type_title: XmlElem<string>;
  print_form_id: XmlElem<number>;
  custom_web_template_id: XmlElem<number>;
  custom_post_web_template_id: XmlElem<number>;
  index: XmlElem<number>;
}
interface AssessmentAppraiseDocumentParticipant {
  participant_id: XmlElem<string>;
  parameters: XmlMultiElem<AssessmentAppraiseDocumentParticipantParameter>;
  is_final: XmlElem<boolean>;
  assessment_appraise_types: XmlMultiElem<AssessmentAppraiseDocumentParticipantAssessmentAppraiseType>;
}

interface AssessmentAppraiseDocumentAssessment {
  assessment_id: XmlElem<number>;
  assessment_name: XmlElem<string>;
}

interface AssessmentAppraiseDocumentExercise {
  exercise_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentCustomHeader {
  display_eval: XmlElem<string>;
  title: XmlElem<string>;
  value_eval: XmlElem<string>;
}

interface AssessmentAppraiseDocumentCustomObject {
  custom_object_id: XmlElem<number>;
  custom_object_name: XmlElem<string>;
  custom_object_type: XmlElem<string>;
}

interface AssessmentAppraiseDocumentImpersonatePerson {
  impersonator_id: XmlElem<number>;
  impersonator_fullname: XmlElem<string>;
  face_person_id: XmlElem<number>;
  face_person_fullname: XmlElem<string>;
  from_date: XmlElem<Date>;
  to_date: XmlElem<Date>;
}

type AssessmentAppraiseDocumentTopElem = XmlTopElem & { Doc: AssessmentAppraiseDocument } & 
  ObjectCodeNameBase &
  CustomElemsBase &
  AdminAccessBase & {
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  status: XmlElem<string>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  is_model: XmlElem<boolean>;
  person_id: XmlElem<number>;
  assessment_object_type: XmlElem<string>;
  max_auditory: XmlElem<number>;
  auditorys: XmlMultiElem<AssessmentAppraiseDocumentAuditory>;
  groups: XmlMultiElem<AssessmentAppraiseDocumentGroup>;
  departments: XmlMultiElem<AssessmentAppraiseDocumentDepartment>;
  assessment_objects: XmlMultiElem<AssessmentAppraiseDocumentAssessmentObject>;
  ass_position_commons: XmlMultiElem<AssessmentAppraiseDocumentAssPositionCommon>;
  grades: XmlMultiElem<AssessmentAppraiseDocumentGrade>;
  workflow_id: XmlElem<number>;
  assessment_appraise_matrix_id: XmlElem<number>;
  participants: XmlMultiElem<AssessmentAppraiseDocumentParticipant>;
  participant_select: XmlElem<string>;
  ignore_presence: XmlElem<boolean>;
  include_fired: XmlElem<boolean>;
  always_check_custom_experts: XmlElem<boolean>;
  external_display_options: XmlElem<string>;
  assessments: XmlMultiElem<AssessmentAppraiseDocumentAssessment>;
  exercises: XmlMultiElem<AssessmentAppraiseDocumentExercise>;
  custom_headers: XmlMultiElem<AssessmentAppraiseDocumentCustomHeader>;
  custom_object_type: XmlElem<string>;
  custom_objects: XmlMultiElem<AssessmentAppraiseDocumentCustomObject>;
  manual_document_id: XmlElem<number>;
  is_basic_comment: XmlElem<boolean>;
  is_comment_required: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  log: XmlElem<string>;
  report_id: XmlElem<number>;
  prefix_custom_web_template_id: XmlElem<number>;
  tree_custom_web_template_id: XmlElem<number>;
  header_web_template_id: XmlElem<number>;
  data_web_template_id: XmlElem<number>;
  css_template_id: XmlElem<number>;
  xml_template_id: XmlElem<number>;
  server_agent_id: XmlElem<number>;
  player: XmlElem<number>;
  impersonate_persons: XmlMultiElem<AssessmentAppraiseDocumentImpersonatePerson>;
  role_id: XmlMultiElem<number>;
}

type AssessmentAppraiseDocument = XmlDocument & { TopElem: AssessmentAppraiseDocumentTopElem; };
