interface SystemEventDocumentSectionAction {
  id: XmlElem<string>;
  type: XmlElem<string>;
  eval_str: XmlElem<string>;
  notification_id: XmlElem<number>;
  print_form_id: XmlElem<number>;
  activity_id: XmlElem<number>;
  log_eval_str: XmlElem<string>;
  operation_id: XmlElem<number>;
}
interface SystemEventDocumentSection {
  id: XmlElem<string>;
  name: XmlElem<string>;
  perfom_condition: XmlElem<string>;
  actions: XmlMultiElem<SystemEventDocumentSectionAction>;
}

type SystemEventDocumentTopElem = XmlTopElem & { Doc: SystemEventDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  desc: XmlElem<string>;
  linked_system_event_id: XmlElem<number>;
  perfom_condition: XmlElem<string>;
  is_active: XmlElem<boolean>;
  sections: XmlMultiElem<SystemEventDocumentSection>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type SystemEventDocument = XmlDocument & {
  TopElem: SystemEventDocumentTopElem;
};
