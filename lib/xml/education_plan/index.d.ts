interface EducationPlanDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramStartAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishNotifiation {
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramStartNotifiation {
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramProgramResult {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string>;
  date: XmlElem<Date>;
}

interface EducationPlanDocumentProgram extends CustomElemsBase {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_progpam_id: XmlElem<number>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  start_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramStartLearningTask>;
  start_assessments: XmlMultiElem<EducationPlanDocumentProgramStartAssessment>;
  finish_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramFinishLearningTask>;
  finish_assessments: XmlMultiElem<EducationPlanDocumentProgramFinishAssessment>;
  finish_notifiation: XmlElem<EducationPlanDocumentProgramFinishNotifiation>;
  start_notifiation: XmlElem<EducationPlanDocumentProgramStartNotifiation>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  catalog_name: XmlElem<string, typeof common.learning_catalogs>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number>;
  days: XmlElem<number>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  result_type: XmlElem<string, typeof common.exchange_object_types>;
  result_object_id: XmlElem<number>;
  result_object_name: XmlElem<string>;
  result_object_code: XmlElem<string>;
  result_object_start_date: XmlElem<Date>;
  result_object_finish_date: XmlElem<Date>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  tutor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  weight: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  start_type: XmlElem<string>;
  mark: XmlElem<number>;
  active_learning_id: XmlElem<number, ActiveLearningCatalogDocumentTopElem>;
  learning_id: XmlElem<number, LearningCatalogDocumentTopElem>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  required: XmlElem<boolean>;
  completed_parent_programs: XmlMultiElem<EducationPlanDocumentProgramCompletedParentProgram>;
  program_results: XmlMultiElem<EducationPlanDocumentProgramProgramResult>;
}

type EducationPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: EducationPlanDocument;
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  compound_program_id: XmlElem<number, CompoundProgramCatalogDocumentTopElem>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  tutor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  update_status_and_activity: XmlElem<boolean>;
  strong_date_control: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  fact_finish_date: XmlElem<Date>;
  last_activity_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  mark: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  readiness_percent: XmlElem<number>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  last_state_id: XmlElem<number, typeof common.education_learning_states>;
  programs: XmlMultiElem<EducationPlanDocumentProgram>;
  calculate_state_id(): unknown;
  development_plan_id: XmlElem<number, DevelopmentPlanCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  getEducationPlanAccess(objId: number, userId: number, teObject: unknown): unknown;
  calculateMark(): unknown;
};

type EducationPlanDocument = XmlDocument & {
  TopElem: EducationPlanDocumentTopElem;
  education_plan: EducationPlanDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
