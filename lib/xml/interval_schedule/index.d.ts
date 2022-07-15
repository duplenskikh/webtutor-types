interface IntervalScheduleWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
}

interface IntervalScheduleCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IntervalScheduleView {
  workflow_state?: XmlElem<string>;
  workflow_action_result?: XmlElem<any>;
  workflow_create_break?: XmlElem<boolean>;
}

interface IntervalScheduleHistory {
  status_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
}

interface IntervalScheduleChange {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
}

interface IntervalScheduleTopElem extends XmlTopElem<IntervalScheduleDocument>, PersonFillingBase, WorkflowDataBase, FileListBase, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  presence_state_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  workflow_type?: XmlElem<string>;
  workflow_matching_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  workflow_matchings?: XmlMultiElem<IntervalScheduleWorkflowMatching>;
  custom_fields?: XmlMultiElem<IntervalScheduleCustomField>;
  view?: XmlElem<IntervalScheduleView>;
  history?: XmlElem<IntervalScheduleHistory>;
  change?: XmlElem<IntervalScheduleChange>;
}

type IntervalScheduleDocument = XmlDocument<IntervalScheduleTopElem>;
