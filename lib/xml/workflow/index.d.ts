interface WorkflowDocumentFieldGroup {
  code: XmlElem<string>;
  name: XmlElem<string>;
  read_conditions: XmlElem<ConditionsBase>;
  write_conditions: XmlElem<ConditionsBase>;
}

interface WorkflowDocumentAction extends WorkflowElemOperationsBase, ConditionsBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_trigger: XmlElem<boolean>;
}

interface WorkflowDocumentEscalationCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  state_id: XmlElem<number, typeof common.learning_states>;
}

interface WorkflowDocumentEscalationAssessment {
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  state_id: XmlElem<number, typeof common.learning_states>;
}

interface WorkflowDocumentEscalationPoll {
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  status: XmlElem<number, typeof common.learning_states>;
}

interface WorkflowDocumentEscalation extends WorkflowElemOperationsBase {
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_state_id: XmlElem<string>;
  auto_escalation: XmlElem<boolean>;
  auto_escalation_by_end_date: XmlElem<boolean>;
  auto_escalation_days: XmlElem<number>;
  auto_escalation_repeat: XmlElem<boolean>;
  escalation_eval_str: XmlElem<string>;
  escalation_eval_negative: XmlElem<boolean>;
  courses: XmlMultiElem<WorkflowDocumentEscalationCourse>;
  assessments: XmlMultiElem<WorkflowDocumentEscalationAssessment>;
  polls: XmlMultiElem<WorkflowDocumentEscalationPoll>;
}

interface WorkflowDocumentTuneFieldTuneFieldChain {
  name: XmlElem<string>;
  path: XmlElem<string>;
  catalog_name: XmlElem<string>;
  type: XmlElem<string>;
  is_multiple: XmlElem<boolean>;
  pk: XmlElem<string>;
  value: XmlElem<string>;
}

interface WorkflowDocumentTuneField {
  tune_field_chain: XmlElem<WorkflowDocumentTuneFieldTuneFieldChain>;
}

type WorkflowDocumentTopElem = XmlTopElem &
ConditionsBase &
WorkflowFieldsStatesBase & {
  Doc: WorkflowDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  add_conditions: XmlElem<ConditionsBase>;
  field_groups: XmlMultiElem<WorkflowDocumentFieldGroup>;
  actions: XmlMultiElem<WorkflowDocumentAction>;
  use_triggers(): unknown;
  escalations: XmlMultiElem<WorkflowDocumentEscalation>;
  default_state: XmlElem<string>;
  default_action: XmlElem<string>;
  auto_submit_fields: XmlElem<boolean>;
  comment: XmlElem<string>;
  destination_object_name: XmlElem<string, typeof common.exchange_object_types>;
  tune_fields: XmlMultiElem<WorkflowDocumentTuneField>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  run_action(action: string): unknown;
  role_id: XmlMultiElemObject<number>;
};

type WorkflowDocument = XmlDocument & {
  TopElem: WorkflowDocumentTopElem;
  workflow: WorkflowDocumentTopElem;
  DocDesc(): unknown;
};
