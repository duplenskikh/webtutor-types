interface WorkflowFieldGroupReadConditions extends ConditionsBase {
}

interface WorkflowFieldGroupWriteConditions extends ConditionsBase {
}

interface WorkflowFieldGroup {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  read_conditions?: XmlElem<ConditionsBase>;
  write_conditions?: XmlElem<ConditionsBase>;
  read_conditions?: XmlElem<WorkflowFieldGroupReadConditions>;
  write_conditions?: XmlElem<WorkflowFieldGroupWriteConditions>;
}

interface WorkflowAction extends WorkflowElemOperationsBase, ConditionsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_trigger?: XmlElem<boolean>;
}

interface WorkflowEscalationCourse {
  course_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface WorkflowEscalationAssessment {
  assessment_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface WorkflowEscalationPoll {
  poll_id?: XmlElem<number>;
  status?: XmlElem<number>;
}

interface WorkflowEscalation extends WorkflowElemOperationsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  auto_escalation?: XmlElem<boolean>;
  auto_escalation_by_end_date?: XmlElem<boolean>;
  auto_escalation_days?: XmlElem<number>;
  auto_escalation_repeat?: XmlElem<boolean>;
  escalation_eval_str?: XmlElem<string>;
  escalation_eval_negative?: XmlElem<boolean>;
  courses?: XmlMultiElem<WorkflowEscalationCourse>;
  assessments?: XmlMultiElem<WorkflowEscalationAssessment>;
  polls?: XmlMultiElem<WorkflowEscalationPoll>;
}

interface WorkflowTuneFieldTuneFieldChain {
  name?: XmlElem<string>;
  path?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  type?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  pk?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface WorkflowTuneField {
  tune_field_chain?: XmlMultiElem<undefined>;
  tune_field_chain?: XmlElem<WorkflowTuneFieldTuneFieldChain>;
}

interface WorkflowView {
  disp_add?: XmlElem<boolean>;
}

interface WorkflowAddConditions extends ConditionsBase {
}

interface WorkflowTopElem extends XmlTopElem<WorkflowDocument>, ConditionsBase, WorkflowFieldsStatesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  default_state?: XmlElem<string>;
  default_action?: XmlElem<string>;
  auto_submit_fields?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  destination_object_name?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  add_conditions?: XmlElem<ConditionsBase>;
  role_id?: XmlMultiElem<number>;
  field_groups?: XmlMultiElem<WorkflowFieldGroup>;
  actions?: XmlMultiElem<WorkflowAction>;
  escalations?: XmlMultiElem<WorkflowEscalation>;
  tune_fields?: XmlMultiElem<WorkflowTuneField>;
  view?: XmlElem<WorkflowView>;
  add_conditions?: XmlElem<WorkflowAddConditions>;
  use_triggers?(): any;
  run_action?(): any;
}

type WorkflowDocument = XmlDocument<WorkflowTopElem>;
