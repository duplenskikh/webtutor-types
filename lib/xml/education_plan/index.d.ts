interface EducationPlanDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramStartAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface EducationPlanDocumentProgramFinishNotifiation {
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramStartNotifiation {
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface EducationPlanDocumentProgramResultObject {
  object_id: XmlElem<number | null>;
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  result_object_id: XmlElem<number | null>;
}

interface EducationPlanDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface EducationPlanDocumentProgramProgramResult {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  type: XmlElem<string | null>;
  date: XmlElem<Date | null>;
}

interface EducationPlanDocumentProgram extends CustomElemsBase {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  parent_progpam_id: XmlElem<number | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  start_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramStartLearningTask | null>;
  start_assessments: XmlMultiElem<EducationPlanDocumentProgramStartAssessment | null>;
  finish_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramFinishLearningTask | null>;
  finish_assessments: XmlMultiElem<EducationPlanDocumentProgramFinishAssessment | null>;
  finish_notifiation: XmlElem<EducationPlanDocumentProgramFinishNotifiation | null>;
  start_notifiation: XmlElem<EducationPlanDocumentProgramStartNotifiation | null>;
  type: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  object_start_date: XmlElem<Date | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number | null>;
  days: XmlElem<number | null>;
  create_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  plan_date: XmlElem<Date | null>;
  result_type: XmlElem<string | null, typeof common.exchange_object_types>;
  result_object_id: XmlElem<number | null>;
  result_object_name: XmlElem<string | null>;
  result_object_code: XmlElem<string | null>;
  result_object_start_date: XmlElem<Date | null>;
  result_object_finish_date: XmlElem<Date | null>;
  result_objects: XmlMultiElem<EducationPlanDocumentProgramResultObject | null>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  weight: XmlElem<number | null>;
  readiness_percent: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  mark: XmlElem<number | null>;
  active_learning_id: XmlElem<number | null, ActiveLearningCatalogDocumentTopElem>;
  learning_id: XmlElem<number | null, LearningCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  required: XmlElem<boolean>;
  completed_parent_programs: XmlMultiElem<EducationPlanDocumentProgramCompletedParentProgram | null>;
  program_results: XmlMultiElem<EducationPlanDocumentProgramProgramResult | null>;
}

type EducationPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
AdminAccessBase &
FileListBase &
CustomElemsBase & {
  Doc: EducationPlanDocument;
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  compound_program_id: XmlElem<number | null, CompoundProgramCatalogDocumentTopElem>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  tutor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  update_status_and_activity: XmlElem<boolean>;
  strong_date_control: XmlElem<boolean>;
  create_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  fact_finish_date: XmlElem<Date | null>;
  last_activity_date: XmlElem<Date | null>;
  plan_date: XmlElem<Date | null>;
  mark: XmlElem<number | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  readiness_percent: XmlElem<number | null>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  last_state_id: XmlElem<number | null, typeof common.education_learning_states>;
  programs: XmlMultiElem<EducationPlanDocumentProgram | null>;
  calculate_state_id(): unknown;
  development_plan_id: XmlElem<number | null, DevelopmentPlanCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  getEducationPlanAccess(objId: number, userId: number, objectTopElem: unknown): unknown;
  calculateMark(): EducationPlanDocument;
};

type EducationPlanDocument = XmlDocument & {
  TopElem: EducationPlanDocumentTopElem;
  education_plan: EducationPlanDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
