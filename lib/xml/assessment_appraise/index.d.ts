interface AssessmentAppraiseAuditory {
  person_id?: XmlElem<number>;
  person_name?: XmlElem<string>;
  position_name?: XmlElem<string>;
}

interface AssessmentAppraiseGroup {
  group_id?: XmlElem<number>;
}

interface AssessmentAppraiseDepartment {
  department_id?: XmlElem<number>;
}

interface AssessmentAppraiseAssessmentObject {
  assessment_object_id?: XmlElem<number>;
}

interface AssessmentAppraiseAssPositionCommon {
  ass_position_common_id?: XmlElem<number>;
}

interface AssessmentAppraiseGrade {
  grade_id?: XmlElem<number>;
  level?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface AssessmentAppraiseParticipantParameter {
  parameter_id?: XmlElem<string>;
}

interface AssessmentAppraiseParticipantAssessmentAppraiseType extends SupplementaryQuestionsBase, WebVariablesBase {
  assessment_appraise_type_id?: XmlElem<string>;
  competence_profile_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  flag_01?: XmlElem<boolean>;
  flag_02?: XmlElem<string>;
  flag_03?: XmlElem<number>;
  flag_04?: XmlElem<string>;
  flag_05?: XmlElem<number>;
  flag_06?: XmlElem<boolean>;
  flag_07?: XmlElem<string>;
  formula?: XmlElem<string>;
  sub_formula?: XmlElem<string>;
  additional_formula?: XmlElem<string>;
  is_formuled_result?: XmlElem<boolean>;
  advanced_columns_formula?: XmlElem<string>;
  is_formuled_result_readonly?: XmlElem<boolean>;
  incrementation?: XmlElem<number>;
  period_start?: XmlElem<Date>;
  period_end?: XmlElem<Date>;
  type_title?: XmlElem<string>;
  print_form_id?: XmlElem<number>;
  custom_web_template_id?: XmlElem<number>;
  custom_post_web_template_id?: XmlElem<number>;
  index?: XmlElem<number>;
}

interface AssessmentAppraiseParticipantCustomizeExpert {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  person_position_name?: XmlElem<string>;
  role?: XmlElem<string>;
  responsible?: XmlElem<boolean>;
}

interface AssessmentAppraiseParticipantCustomize {
  min?: XmlElem<number>;
  max?: XmlElem<number>;
  person_id?: XmlElem<number>;
  is_custom_experts?: XmlElem<boolean>;
  custom_title?: XmlElem<string>;
  show_additional_participants?: XmlElem<boolean>;
  additional_participants_code?: XmlElem<string>;
  experts?: XmlMultiElem<AssessmentAppraiseParticipantCustomizeExpert>;
}

interface AssessmentAppraiseParticipant {
  participant_id?: XmlElem<string>;
  is_final?: XmlElem<boolean>;
  tab_selector_type?: XmlElem<string>;
  parameters?: XmlMultiElem<AssessmentAppraiseParticipantParameter>;
  assessment_appraise_types?: XmlMultiElem<AssessmentAppraiseParticipantAssessmentAppraiseType>;
  customize?: XmlElem<AssessmentAppraiseParticipantCustomize>;
}

interface AssessmentAppraiseAssessment {
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
}

interface AssessmentAppraiseExercise {
  exercise_id?: XmlElem<number>;
}

interface AssessmentAppraiseCustomHeader {
  display_eval?: XmlElem<string>;
  title?: XmlElem<string>;
  value_eval?: XmlElem<string>;
}

interface AssessmentAppraiseCustomObject {
  custom_object_id?: XmlElem<number>;
  custom_object_name?: XmlElem<string>;
  custom_object_type?: XmlElem<string>;
}

interface AssessmentAppraiseImpersonatePerson {
  impersonator_id?: XmlElem<number>;
  impersonator_fullname?: XmlElem<string>;
  face_person_id?: XmlElem<number>;
  face_person_fullname?: XmlElem<string>;
  from_date?: XmlElem<Date>;
  to_date?: XmlElem<Date>;
}

interface AssessmentAppraiseViewPaData {
  pa_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_name?: XmlElem<string>;
  assessment_appraise_type?: XmlElem<string>;
  assessment_appraise_type_name?: XmlElem<string>;
  status?: XmlElem<string>;
  status_name?: XmlElem<string>;
  count?: XmlElem<number>;
}

interface AssessmentAppraiseView {
  selector?: XmlElem<string>;
  tab_selector?: XmlElem<string>;
  plan_selection_way?: XmlElem<string>;
  report_is_done?: XmlElem<boolean>;
  report_assessment_appraise_type?: XmlElem<string>;
  sort_pa_type_id?: XmlElem<string>;
  sort_type_id?: XmlElem<string>;
  generation_update?: XmlElem<boolean>;
  assessment_appraise_type?: XmlElem<string>;
  pa_datas?: XmlMultiElem<AssessmentAppraiseViewPaData>;
}

interface AssessmentAppraiseTopElem extends XmlTopElem<AssessmentAppraiseDocument>, ObjectCodeNameBase, CustomElemsBase, AdminAccessBase {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  web_display?: XmlElem<boolean>;
  flag_use_plan?: XmlElem<boolean>;
  is_model?: XmlElem<boolean>;
  person_id?: XmlElem<number>;
  assessment_object_type?: XmlElem<string>;
  max_auditory?: XmlElem<number>;
  workflow_id?: XmlElem<number>;
  assessment_appraise_matrix_id?: XmlElem<number>;
  participant_select?: XmlElem<string>;
  ignore_presence?: XmlElem<boolean>;
  include_fired?: XmlElem<boolean>;
  always_check_custom_experts?: XmlElem<boolean>;
  external_display_options?: XmlElem<string>;
  custom_object_type?: XmlElem<string>;
  manual_document_id?: XmlElem<number>;
  is_basic_comment?: XmlElem<boolean>;
  is_comment_required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  log?: XmlElem<string>;
  report_id?: XmlElem<number>;
  prefix_custom_web_template_id?: XmlElem<number>;
  tree_custom_web_template_id?: XmlElem<number>;
  header_web_template_id?: XmlElem<number>;
  data_web_template_id?: XmlElem<number>;
  css_template_id?: XmlElem<number>;
  xml_template_id?: XmlElem<number>;
  server_agent_id?: XmlElem<number>;
  player?: XmlElem<number>;
  role_id?: XmlMultiElem<number>;
  auditorys?: XmlMultiElem<AssessmentAppraiseAuditory>;
  groups?: XmlMultiElem<AssessmentAppraiseGroup>;
  departments?: XmlMultiElem<AssessmentAppraiseDepartment>;
  assessment_objects?: XmlMultiElem<AssessmentAppraiseAssessmentObject>;
  ass_position_commons?: XmlMultiElem<AssessmentAppraiseAssPositionCommon>;
  grades?: XmlMultiElem<AssessmentAppraiseGrade>;
  participants?: XmlMultiElem<AssessmentAppraiseParticipant>;
  assessments?: XmlMultiElem<AssessmentAppraiseAssessment>;
  exercises?: XmlMultiElem<AssessmentAppraiseExercise>;
  custom_headers?: XmlMultiElem<AssessmentAppraiseCustomHeader>;
  custom_objects?: XmlMultiElem<AssessmentAppraiseCustomObject>;
  impersonate_persons?: XmlMultiElem<AssessmentAppraiseImpersonatePerson>;
  view?: XmlElem<AssessmentAppraiseView>;
}

type AssessmentAppraiseDocument = XmlDocument<AssessmentAppraiseTopElem>;
