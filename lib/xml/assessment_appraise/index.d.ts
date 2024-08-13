interface AssessmentAppraiseDocumentAuditory {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_name: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentDepartment {
  department_id: XmlElem<number | null>;
}

interface AssessmentAppraiseDocumentAssessmentObject {
  assessment_object_id: XmlElem<number | null>;
}

interface AssessmentAppraiseDocumentAssPositionCommon {
  ass_position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentGrade {
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  level: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentParticipantParameter {
  parameter_id: XmlElem<string | null, typeof common.assessment_appraise_parameters>;
}

interface AssessmentAppraiseDocumentParticipantCustomizeExpert {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  role: XmlElem<string | null>;
  responsible: XmlElem<boolean>;
}

interface AssessmentAppraiseDocumentParticipantCustomize {
  min: XmlElem<number | null>;
  max: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_custom_experts: XmlElem<boolean>;
  custom_title: XmlElem<string | null>;
  experts: XmlMultiElem<AssessmentAppraiseDocumentParticipantCustomizeExpert | null>;
  additional_participants_code: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentParticipantAssessmentAppraiseType extends SupplementaryQuestionsBase, WebVariablesBase {
  assessment_appraise_type_id: XmlElem<string | null, typeof common.assessment_appraise_types>;
  competence_profile_id: XmlElem<number | null, CompetenceProfileCatalogDocumentTopElem>;
  kpi_profile_id: XmlElem<number | null, KpiProfileCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number | null, BonusProfileCatalogDocumentTopElem>;
  flag_01: XmlElem<boolean>;
  flag_02: XmlElem<string>;
  flag_03: XmlElem<number | null>;
  flag_04: XmlElem<string | null>;
  flag_05: XmlElem<number | null>;
  flag_06: XmlElem<boolean | null>;
  flag_07: XmlElem<string | null>;
  formula: XmlElem<string | null>;
  sub_formula: XmlElem<string | null>;
  additional_formula: XmlElem<string | null>;
  is_formuled_result: XmlElem<boolean>;
  advanced_columns_formula: XmlElem<string | null>;
  is_formuled_result_readonly: XmlElem<boolean>;
  incrementation: XmlElem<number>;
  period_start: XmlElem<Date | null>;
  period_end: XmlElem<Date | null>;
  type_title: XmlElem<string | null>;
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  custom_post_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  index: XmlElem<number>;
  career_plan_type: XmlElem<string | null>;
  career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentParticipant {
  participant_id: XmlElem<string | null, typeof common.assessment_appraise_participants>;
  parameters: XmlMultiElem<AssessmentAppraiseDocumentParticipantParameter | null>;
  customize: XmlElem<AssessmentAppraiseDocumentParticipantCustomize | null>;
  is_final: XmlElem<boolean>;
  assessment_appraise_types: XmlMultiElem<AssessmentAppraiseDocumentParticipantAssessmentAppraiseType | null>;
}

interface AssessmentAppraiseDocumentAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  assessment_name: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentExercise {
  exercise_id: XmlElem<number | null, ExerciseCatalogDocumentTopElem>;
}

interface AssessmentAppraiseDocumentCustomHeader {
  display_eval: XmlElem<string | null>;
  title: XmlElem<string | null>;
  value_eval: XmlElem<string | null>;
}

interface AssessmentAppraiseDocumentCustomObject {
  custom_object_id: XmlElem<number | null>;
  custom_object_name: XmlElem<string | null>;
  custom_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface AssessmentAppraiseDocumentImpersonatePerson {
  impersonator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  impersonator_fullname: XmlElem<string | null>;
  face_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  face_person_fullname: XmlElem<string | null>;
  from_date: XmlElem<Date | null>;
  to_date: XmlElem<Date | null>;
}

type AssessmentAppraiseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: AssessmentAppraiseDocument;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.assessment_appraise_statuses>;
  web_display: XmlElem<boolean>;
  flag_use_plan: XmlElem<boolean>;
  is_model: XmlElem<boolean>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  assessment_object_type: XmlElem<string>;
  max_auditory: XmlElem<number | null>;
  auditorys: XmlMultiElem<AssessmentAppraiseDocumentAuditory | null>;
  groups: XmlMultiElem<AssessmentAppraiseDocumentGroup | null>;
  departments: XmlMultiElem<AssessmentAppraiseDocumentDepartment | null>;
  assessment_objects: XmlMultiElem<AssessmentAppraiseDocumentAssessmentObject | null>;
  ass_position_commons: XmlMultiElem<AssessmentAppraiseDocumentAssPositionCommon | null>;
  grades: XmlMultiElem<AssessmentAppraiseDocumentGrade | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  is_visible_auditorys: XmlElem<boolean>;
  is_visible_evaluatings: XmlElem<boolean>;
  is_visible_experts: XmlElem<boolean>;
  assessment_appraise_matrix_id: XmlElem<number | null, AssessmentAppraiseMatrixCatalogDocumentTopElem>;
  participants: XmlMultiElem<AssessmentAppraiseDocumentParticipant | null>;
  participant_select: XmlElem<string | null, ParticipantCatalogDocumentTopElem>;
  ignore_presence: XmlElem<boolean>;
  include_fired: XmlElem<boolean>;
  always_check_custom_experts: XmlElem<boolean>;
  external_display_options: XmlElem<string | null>;
  assessments: XmlMultiElem<AssessmentAppraiseDocumentAssessment | null>;
  exercises: XmlMultiElem<AssessmentAppraiseDocumentExercise | null>;
  custom_headers: XmlMultiElem<AssessmentAppraiseDocumentCustomHeader | null>;
  custom_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  custom_objects: XmlMultiElem<AssessmentAppraiseDocumentCustomObject | null>;
  manual_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  is_basic_comment: XmlElem<boolean | null>;
  is_comment_required: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  log: XmlElem<string | null>;
  report_id: XmlElem<number | null, ActionReportCatalogDocumentTopElem>;
  prefix_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  tree_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  header_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  data_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  css_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  xml_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  server_agent_id: XmlElem<number | null, ServerAgentCatalogDocumentTopElem>;
  player: XmlElem<number>;
  impersonate_persons: XmlMultiElem<AssessmentAppraiseDocumentImpersonatePerson | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type AssessmentAppraiseDocument = XmlDocument & {
  TopElem: AssessmentAppraiseDocumentTopElem;
  assessment_appraise: AssessmentAppraiseDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
