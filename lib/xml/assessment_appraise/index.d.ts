interface AssessmentAppraiseDocumentAuditory {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_name: XmlElem<string>;
  position_name: XmlElem<string>;
}

interface AssessmentAppraiseDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentDepartment {
  department_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentAssessmentObject {
  assessment_object_id: XmlElem<number>;
}

interface AssessmentAppraiseDocumentAssPositionCommon {
  ass_position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentGrade {
  grade_id: XmlElem<number, GradeCatalogDocumentTopElem>;
  level: XmlElem<number>;
  comment: XmlElem<string>;
}

interface AssessmentAppraiseDocumentParticipantParameter {
  parameter_id: XmlElem<string, typeof common.assessment_appraise_parameters>;
}

interface AssessmentAppraiseDocumentParticipantCustomizeExpert {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  role: XmlElem<string>;
  responsible: XmlElem<boolean>;
}

interface AssessmentAppraiseDocumentParticipantCustomize {
  min: XmlElem<number>;
  max: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_custom_experts: XmlElem<boolean>;
  custom_title: XmlElem<string>;
  experts: XmlMultiElem<AssessmentAppraiseDocumentParticipantCustomizeExpert>;
  additional_participants_code: XmlElem<string>;
}

interface AssessmentAppraiseDocumentParticipantAssessmentAppraiseType extends SupplementaryQuestionsBase, WebVariablesBase {
  assessment_appraise_type_id: XmlElem<string, typeof common.assessment_appraise_types>;
  competence_profile_id: XmlElem<number, CompetenceProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number, KpiProfileCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
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
  print_form_id: XmlElem<number, PrintFormCatalogDocumentTopElem>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  custom_post_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  index: XmlElem<number>;
  career_plan_type: XmlElem<string>;
  career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentParticipant {
  participant_id: XmlElem<string, typeof common.assessment_appraise_participants>;
  parameters: XmlMultiElem<AssessmentAppraiseDocumentParticipantParameter>;
  customize: XmlElem<AssessmentAppraiseDocumentParticipantCustomize>;
  is_final: XmlElem<boolean>;
  assessment_appraise_types: XmlMultiElem<AssessmentAppraiseDocumentParticipantAssessmentAppraiseType>;
}

interface AssessmentAppraiseDocumentAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string>;
}

interface AssessmentAppraiseDocumentExercise {
  exercise_id: XmlElem<number, ExerciseCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentCustomHeader {
  display_eval: XmlElem<string>;
  title: XmlElem<string>;
  value_eval: XmlElem<string>;
}

interface AssessmentAppraiseDocumentCustomObject {
  custom_object_id: XmlElem<number>;
  custom_object_name: XmlElem<string>;
  custom_object_type: XmlElem<string, typeof common.exchange_object_types>;
}

interface AssessmentAppraiseDocumentImpersonatePerson {
  impersonator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  impersonator_fullname: XmlElem<string>;
  face_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  face_person_fullname: XmlElem<string>;
  from_date: XmlElem<Date>;
  to_date: XmlElem<Date>;
}

type AssessmentAppraiseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: AssessmentAppraiseDocument;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  is_model: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  assessment_object_type: XmlElem<string>;
  max_auditory: XmlElem<number>;
  auditorys: XmlMultiElem<AssessmentAppraiseDocumentAuditory>;
  groups: XmlMultiElem<AssessmentAppraiseDocumentGroup>;
  departments: XmlMultiElem<AssessmentAppraiseDocumentDepartment>;
  assessment_objects: XmlMultiElem<AssessmentAppraiseDocumentAssessmentObject>;
  ass_position_commons: XmlMultiElem<AssessmentAppraiseDocumentAssPositionCommon>;
  grades: XmlMultiElem<AssessmentAppraiseDocumentGrade>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  is_visible_experts: XmlElem<boolean>;
  assessment_appraise_matrix_id: XmlElem<number, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  participants: XmlMultiElem<AssessmentAppraiseDocumentParticipant>;
  participant_select: XmlElem<string, ParticipantCatalogDocumentTopElem>;
  ignore_presence: XmlElem<boolean>;
  include_fired: XmlElem<boolean>;
  always_check_custom_experts: XmlElem<boolean>;
  external_display_options: XmlElem<string>;
  assessments: XmlMultiElem<AssessmentAppraiseDocumentAssessment>;
  exercises: XmlMultiElem<AssessmentAppraiseDocumentExercise>;
  custom_headers: XmlMultiElem<AssessmentAppraiseDocumentCustomHeader>;
  custom_object_type: XmlElem<string, typeof common.exchange_object_types>;
  custom_objects: XmlMultiElem<AssessmentAppraiseDocumentCustomObject>;
  manual_document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  is_basic_comment: XmlElem<boolean>;
  is_comment_required: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  log: XmlElem<string>;
  report_id: XmlElem<number, ActionReportCatalogDocumentTopElem>;
  prefix_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  tree_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  header_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  data_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  css_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  xml_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  server_agent_id: XmlElem<number, ServerAgentCatalogDocumentTopElem>;
  player: XmlElem<number>;
  impersonate_persons: XmlMultiElem<AssessmentAppraiseDocumentImpersonatePerson>;
  role_id: XmlMultiElemObject<number>;
};

type AssessmentAppraiseDocument = XmlDocument & {
  TopElem: AssessmentAppraiseDocumentTopElem;
  assessment_appraise: AssessmentAppraiseDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
