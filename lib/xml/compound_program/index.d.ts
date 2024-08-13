interface CompoundProgramDocumentProgramStartLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramStartAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishLearningTask {
  learning_task_id: XmlElem<number | null, LearningTaskCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishAssessment {
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
}

interface CompoundProgramDocumentProgramFinishNotifiation {
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramStartNotifiation {
  notification_template_id: XmlElem<number | null, NotificationTemplateCatalogDocumentTopElem>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
}

interface CompoundProgramDocumentProgramCompletedParentProgram {
  program_id: XmlElem<number | null>;
}

interface CompoundProgramDocumentProgram extends CostCurrencyTypeBase, CustomElemsBase {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  parent_progpam_id: XmlElem<number | null>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  start_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramStartLearningTask | null>;
  start_assessments: XmlMultiElem<CompoundProgramDocumentProgramStartAssessment | null>;
  finish_learning_tasks: XmlMultiElem<CompoundProgramDocumentProgramFinishLearningTask | null>;
  finish_assessments: XmlMultiElem<CompoundProgramDocumentProgramFinishAssessment | null>;
  finish_notifiation: XmlElem<CompoundProgramDocumentProgramFinishNotifiation | null>;
  start_notifiation: XmlElem<CompoundProgramDocumentProgramStartNotifiation | null>;
  duration: XmlElem<number | null>;
  person_num: XmlElem<number | null>;
  type: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  object_code: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.learning_catalogs>;
  subject: XmlElem<string | null>;
  body: XmlElem<string | null>;
  body_type: XmlElem<string | null>;
  edit_notification: XmlElem<boolean>;
  delay_days: XmlElem<number | null>;
  days: XmlElem<number | null>;
  weight: XmlElem<number | null>;
  start_type: XmlElem<string | null>;
  required: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  completed_parent_programs: XmlMultiElem<CompoundProgramDocumentProgramCompletedParentProgram | null>;
}

type CompoundProgramDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
LectorsBase &
FileListBase &
KnowledgePartsBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CompoundProgramDocument;
  desc: XmlElem<string | null>;
  min_person_num: XmlElem<number | null>;
  allow_self_assignment: XmlElem<boolean>;
  programs: XmlMultiElem<CompoundProgramDocumentProgram | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  activate_program_to_person(input: unknown): { error: number, errorText: string; result: { id: number, error: number, text: string }[] };
};

type CompoundProgramDocument = XmlDocument & {
  TopElem: CompoundProgramDocumentTopElem;
  compound_program: CompoundProgramDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
