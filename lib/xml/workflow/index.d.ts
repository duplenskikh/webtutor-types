interface WorkflowTopElem extends XmlTopElem<WorkflowDocument>,
  IWTConditionsBase,
  IWTWorkflowFieldsStatesBase,
  IWTDocInfo
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  add_conditions?: IWTConditionsBase;
  field_groups?: XmlMultiElem<IWTWorkflowFieldGroup>;
  actions?: XmlMultiElem<IWTWorkflowAction>;
  use_triggers?(): boolean;
  escalations?: XmlMultiElem<IWTWorkflowEscalation>;
  default_state?: XmlElem<string>;
  default_action?: XmlElem<string>;
  auto_submit_fields?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  destination_object_name?: XmlElem<string>;
  tune_fields?: XmlMultiElem<IWTWorkflowTuneField>;
  is_std?: XmlElem<boolean>;
  run_action?(actionParam: any): void;
}

type WorkflowDocument = XmlDocument<WorkflowTopElem>;
