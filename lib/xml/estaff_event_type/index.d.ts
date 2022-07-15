interface EstaffEventTypePositionCommon {
  position_common_id?: XmlElem<number>;
}

interface EstaffEventTypeEventType {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface EstaffEventTypeViewFilter extends AuFtFilter {
}

interface EstaffEventTypeView extends DescBase {
  filter?: XmlElem<EstaffEventTypeViewFilter>;
}

interface EstaffEventTypeTopElem extends XmlTopElem<EstaffEventTypeDocument>, WebVariablesBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  event_type_estaff_id?: XmlElem<string>;
  event_type_estaff_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  visibility_condition?: XmlElem<string>;
  run_visibility_condition_url?: XmlElem<string>;
  action_event_occurs?: XmlElem<string>;
  run_action_event_occurs_url?: XmlElem<string>;
  check_event_processing?: XmlElem<string>;
  run_check_event_processing_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  position_commons?: XmlMultiElem<EstaffEventTypePositionCommon>;
  event_types?: XmlMultiElem<EstaffEventTypeEventType>;
  view?: XmlElem<EstaffEventTypeView>;
  eval_action_event_occurs?(): any;
  eval_check_event_process?(): any;
  eval_visibility_condition?(): any;
}

type EstaffEventTypeDocument = XmlDocument<EstaffEventTypeTopElem>;
