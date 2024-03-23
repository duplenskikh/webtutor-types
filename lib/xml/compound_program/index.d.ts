interface CompoundProgramDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramStartAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishNotifiation {
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramStartNotifiation {
  notification_template_id: XmlElem<number, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number>;
}

interface CompoundProgramDocumentProgram extends CostCurrencyTypeBase, CustomElemsBase {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_progpam_id: XmlElem<number>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  start_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramStartLearningTask>;
  start_assessments: XmlMultiElem<CompoundProgramDocumentProgramStartAssessment>;
  finish_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramFinishLearningTask>;
  finish_assessments: XmlMultiElem<CompoundProgramDocumentProgramFinishAssessment>;
  finish_notifiation: XmlElem<CompoundProgramDocumentProgramFinishNotifiation>;
  start_notifiation: XmlElem<CompoundProgramDocumentProgramStartNotifiation>;
  duration: XmlElem<number>;
  person_num: XmlElem<number>;
  type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  object_code: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.learning_catalogs>;
  subject: XmlElem<string>;
  body: XmlElem<string>;
  body_type: XmlElem<string>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number>;
  days: XmlElem<number>;
  weight: XmlElem<number>;
  start_type: XmlElem<string>;
  required: XmlElem<boolean>;
  comment: XmlElem<string>;
  completed_parent_programs: XmlMultiElem<CompoundProgramDocumentProgramCompletedParentProgram>;
}

type CompoundProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
LectorsBase &
FileListBase &
KnowledgePartsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CompoundProgramDocument;
  desc: XmlElem<string>;
  min_person_num: XmlElem<number>;
  allow_self_assignment: XmlElem<boolean>;
  programs: XmlMultiElem<CompoundProgramDocumentProgram>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
  activate_program_to_person(input: unknown): unknown;
};

type CompoundProgramDocument = XmlDocument & {
  TopElem: CompoundProgramDocumentTopElem;
  compound_program: CompoundProgramDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
