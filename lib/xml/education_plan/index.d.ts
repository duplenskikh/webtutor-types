interface EducationPlanProgramStartLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface EducationPlanProgramStartAssessment {
  assessment_id?: XmlElem<number>;
}

interface EducationPlanProgramFinishLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface EducationPlanProgramFinishAssessment {
  assessment_id?: XmlElem<number>;
}

interface EducationPlanProgramCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface EducationPlanProgramProgramResult {
  person_id?: XmlElem<number>;
  type?: XmlElem<string>;
  date?: XmlElem<Date>;
}

interface EducationPlanProgramFinishNotifiation {
  notification_template_id?: XmlElem<number>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
}

interface EducationPlanProgramStartNotifiation {
  notification_template_id?: XmlElem<number>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
}

interface EducationPlanProgram extends CustomElemsBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  result_type?: XmlElem<string>;
  result_object_id?: XmlElem<number>;
  result_object_name?: XmlElem<string>;
  result_object_code?: XmlElem<string>;
  result_object_start_date?: XmlElem<Date>;
  result_object_finish_date?: XmlElem<Date>;
  state_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  start_type?: XmlElem<string>;
  mark?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  learning_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  required?: XmlElem<boolean>;
  start_learning_tasks?: XmlMultiElem<EducationPlanProgramStartLearningTask>;
  start_assessments?: XmlMultiElem<EducationPlanProgramStartAssessment>;
  finish_learning_tasks?: XmlMultiElem<EducationPlanProgramFinishLearningTask>;
  finish_assessments?: XmlMultiElem<EducationPlanProgramFinishAssessment>;
  completed_parent_programs?: XmlMultiElem<EducationPlanProgramCompletedParentProgram>;
  program_results?: XmlMultiElem<EducationPlanProgramProgramResult>;
  finish_notifiation?: XmlElem<EducationPlanProgramFinishNotifiation>;
  start_notifiation?: XmlElem<EducationPlanProgramStartNotifiation>;
}

interface EducationPlanView {
  part_index?: XmlElem<number>;
}

interface EducationPlanTopElem extends XmlTopElem<EducationPlanDocument>, ObjectCodeNameBase, PersonFillingBase, AdminAccessBase, FileListBase, CustomElemsBase {
  group_id?: XmlElem<number>;
  compound_program_id?: XmlElem<number>;
  type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  tutor_id?: XmlElem<number>;
  update_status_and_activity?: XmlElem<boolean>;
  create_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  last_activity_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  mark?: XmlElem<number>;
  event_id?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  state_id?: XmlElem<number>;
  last_state_id?: XmlElem<number>;
  development_plan_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  programs?: XmlMultiElem<EducationPlanProgram>;
  view?: XmlElem<EducationPlanView>;
  calculate_state_id?(): any;
  getEducationPlanAccess?(): any;
  calculateMark?(): any;
}

type EducationPlanDocument = XmlDocument<EducationPlanTopElem>;
