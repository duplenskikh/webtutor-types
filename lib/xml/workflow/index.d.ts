interface WorkflowDocumentFieldGroup {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  read_conditions: XmlElem<ConditionsBase | null>;
  write_conditions: XmlElem<ConditionsBase | null>;
}

interface WorkflowDocumentAction extends WorkflowElemOperationsBase, ConditionsBase {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_trigger: XmlElem<boolean | null>;
}

interface WorkflowDocumentEscalationCourse {
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<number | null, typeof common.learning_states>;
}

interface WorkflowDocumentEscalationAssessment {
  /** Тест */
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<number | null, typeof common.learning_states>;
}

interface WorkflowDocumentEscalationPoll {
  /** Опрос */
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  /** Состояние */
  status: XmlElem<number | null, typeof common.learning_states>;
}

interface WorkflowDocumentEscalation extends WorkflowElemOperationsBase {
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  workflow_state_id: XmlElem<string | null>;
  auto_escalation: XmlElem<boolean>;
  auto_escalation_by_end_date: XmlElem<boolean>;
  auto_escalation_days: XmlElem<number>;
  auto_escalation_repeat: XmlElem<boolean | null>;
  escalation_eval_str: XmlElem<string | null>;
  escalation_eval_negative: XmlElem<boolean | null>;
  /** Курсы */
  courses: XmlMultiElem<WorkflowDocumentEscalationCourse | null>;
  /** Тесты */
  assessments: XmlMultiElem<WorkflowDocumentEscalationAssessment | null>;
  /** Опросы */
  polls: XmlMultiElem<WorkflowDocumentEscalationPoll | null>;
}

interface WorkflowDocumentTuneFieldTuneFieldChain {
  name: XmlElem<string | null>;
  path: XmlElem<string | null>;
  catalog_name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  is_multiple: XmlElem<boolean | null>;
  pk: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface WorkflowDocumentTuneField {
  tune_field_chain: XmlElem<WorkflowDocumentTuneFieldTuneFieldChain | null>;
}

type WorkflowDocumentTopElem = XmlTopElem &
ConditionsBase &
WorkflowFieldsStatesBase & {
  Doc: WorkflowDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  add_conditions: XmlElem<ConditionsBase | null>;
  field_groups: XmlMultiElem<WorkflowDocumentFieldGroup | null>;
  actions: XmlMultiElem<WorkflowDocumentAction | null>;
  use_triggers(): boolean;
  /** Эскалации заявки */
  escalations: XmlMultiElem<WorkflowDocumentEscalation | null>;
  default_state: XmlElem<string | null>;
  default_action: XmlElem<string | null>;
  auto_submit_fields: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  destination_object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  tune_fields: XmlMultiElem<WorkflowDocumentTuneField | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  run_action(action: string): void;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type WorkflowDocument = XmlDocument & {
  TopElem: WorkflowDocumentTopElem;
  workflow: WorkflowDocumentTopElem;
  DocDesc(): string;
};
