interface EstaffEventTypeDocumentPositionCommon {
  position_common_id: XmlElem<number>;
}

interface EstaffEventTypeDocumentEventType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type EstaffEventTypeDocumentTopElem = XmlTopElem & { Doc: EstaffEventTypeDocument } & 
WebVariablesBase &
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  position_commons: XmlMultiElem<EstaffEventTypeDocumentPositionCommon>;
  event_types: XmlMultiElem<EstaffEventTypeDocumentEventType>;
  event_type_estaff_id: XmlElem<string>;
  event_type_estaff_name: XmlElem<string>;
  org_id: XmlElem<number>;
  visibility_condition: XmlElem<string>;
  run_visibility_condition_url: XmlElem<string>;
  action_event_occurs: XmlElem<string>;
  run_action_event_occurs_url: XmlElem<string>;
  check_event_processing: XmlElem<string>;
  run_check_event_processing_url: XmlElem<string>;
  eval_action_event_occurs?(): unknown;
  eval_check_event_process?(): unknown;
  eval_visibility_condition?(): unknown;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type EstaffEventTypeDocument = XmlDocument & {
  TopElem: EstaffEventTypeDocumentTopElem;
};
