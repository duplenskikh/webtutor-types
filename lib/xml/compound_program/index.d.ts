interface CompoundProgramProgramStartLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface CompoundProgramProgramStartAssessment {
  assessment_id?: XmlElem<number>;
}

interface CompoundProgramProgramFinishLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface CompoundProgramProgramFinishAssessment {
  assessment_id?: XmlElem<number>;
}

interface CompoundProgramProgramCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface CompoundProgramProgramFinishNotifiation {
  notification_template_id?: XmlElem<number>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
}

interface CompoundProgramProgramStartNotifiation {
  notification_template_id?: XmlElem<number>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
}

interface CompoundProgramProgram extends CostCurrencyTypeBase, CustomElemsBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  person_num?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  weight?: XmlElem<number>;
  start_type?: XmlElem<string>;
  required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  start_learning_tasks?: XmlMultiElem<CompoundProgramProgramStartLearningTask>;
  start_assessments?: XmlMultiElem<CompoundProgramProgramStartAssessment>;
  finish_learning_tasks?: XmlMultiElem<CompoundProgramProgramFinishLearningTask>;
  finish_assessments?: XmlMultiElem<CompoundProgramProgramFinishAssessment>;
  completed_parent_programs?: XmlMultiElem<CompoundProgramProgramCompletedParentProgram>;
  finish_notifiation?: XmlElem<CompoundProgramProgramFinishNotifiation>;
  start_notifiation?: XmlElem<CompoundProgramProgramStartNotifiation>;
}

interface CompoundProgramViewFilter extends AuFtFilter {
}

interface CompoundProgramView extends DescBase {
  part_index?: XmlElem<number>;
  filter?: XmlElem<AuFtFilter>;
  filter?: XmlElem<CompoundProgramViewFilter>;
}

interface CompoundProgramTopElem extends XmlTopElem<CompoundProgramDocument>, ObjectCodeNameBase, LectorsBase, FileListBase, KnowledgePartsBase, CustomElemsBase, AdminAccessBase {
  desc?: XmlElem<string>;
  min_person_num?: XmlElem<number>;
  allow_self_assignment?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
  programs?: XmlMultiElem<CompoundProgramProgram>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CompoundProgramView>;
  activate_program_to_person?(): any;
}

type CompoundProgramDocument = XmlDocument<CompoundProgramTopElem>;
