interface SystemEventDocumentSectionAction {
  id: XmlElem<string>;
  type: XmlElem<string, typeof common.system_event_operation_types>;
  eval_str: XmlElem<string>;
  notification_id: XmlElem<number, NotificationCatalogDocumentTopElem>;
  print_form_id: XmlElem<number, PrintFormCatalogDocumentTopElem>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  log_eval_str: XmlElem<string>;
  operation_id: XmlElem<number, OperationCatalogDocumentTopElem> & XmlElem<MsParametersBase>;
}

interface SystemEventDocumentSection {
  id: XmlElem<string>;
  name: XmlElem<string>;
  perfom_condition: XmlElem<string>;
  actions: XmlMultiElem<SystemEventDocumentSectionAction>;
}

type SystemEventDocumentTopElem = XmlTopElem &
MsVariablesBase & {
  Doc: SystemEventDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  desc: XmlElem<string>;
  linked_system_event_id: XmlElem<number, SystemEventCatalogDocumentTopElem>;
  perfom_condition: XmlElem<string>;
  is_active: XmlElem<boolean>;
  sections: XmlMultiElem<SystemEventDocumentSection>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type SystemEventDocument = XmlDocument & {
  TopElem: SystemEventDocumentTopElem;
  system_event: SystemEventDocumentTopElem;
  DocDesc(): unknown;
};
