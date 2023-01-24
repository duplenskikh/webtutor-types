interface EducationPlanDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramStartAssessment {
  assessment_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number>;
}

interface EducationPlanDocumentProgramProgramResult {
  person_id: XmlElem<number>;
  type: XmlElem<string>;
  date: XmlElem<Date>;
}
interface EducationPlanDocumentProgram extends CustomElemsBase {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_progpam_id: XmlElem<number>;
  education_method_id: XmlElem<number>;
  education_program_id: XmlElem<number>;
  start_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramStartLearningTask>;
  start_assessments: XmlMultiElem<EducationPlanDocumentProgramStartAssessment>;
  finish_learning_tasks: XmlMultiElem<EducationPlanDocumentProgramFinishLearningTask>;
  finish_assessments: XmlMultiElem<EducationPlanDocumentProgramFinishAssessment>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  object_start_date: XmlElem<Date>;
  catalog_name: XmlElem<string>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number>;
  days: XmlElem<number>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  result_type: XmlElem<string>;
  result_object_id: XmlElem<number, TestLearningCatalogDocumentTopElem | LearningCatalogDocumentTopElem | LearningTaskResultCatalogDocumentTopElem>;
  result_object_name: XmlElem<string>;
  result_object_code: XmlElem<string>;
  result_object_start_date: XmlElem<Date>;
  result_object_finish_date: XmlElem<Date>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  tutor_id: XmlElem<number>;
  weight: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  start_type: XmlElem<string>;
  mark: XmlElem<number>;
  active_learning_id: XmlElem<number>;
  learning_id: XmlElem<number>;
  request_id: XmlElem<number>;
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
  compound_program_id: XmlElem<number>;
  type: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  tutor_id: XmlElem<number>;
  update_status_and_activity: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  last_activity_date: XmlElem<Date>;
  plan_date: XmlElem<Date>;
  mark: XmlElem<number>;
  event_id: XmlElem<number>;
  readiness_percent: XmlElem<number>;
  state_id: XmlElem<number, typeof common.education_learning_states>;
  last_state_id: XmlElem<number>;
  programs: XmlMultiElem<EducationPlanDocumentProgram>;
  calculate_state_id(): unknown;
  development_plan_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  assessment_appraise_id: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  getEducationPlanAccess(): unknown;
  calculateMark(): unknown;
}

type EducationPlanDocument = XmlDocument & {
  TopElem: EducationPlanDocumentTopElem;
};
