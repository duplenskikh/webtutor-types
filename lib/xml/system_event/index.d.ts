interface SystemEventDocumentSectionAction {
  id: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.system_event_operation_types>;
  eval_str: XmlElem<string | null>;
  notification_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  print_form_id: XmlElem<number | null, PrintFormCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  log_eval_str: XmlElem<string | null>;
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem> & MsParametersBase;
}

interface SystemEventDocumentSection {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  perfom_condition: XmlElem<string | null>;
  actions: XmlMultiElem<SystemEventDocumentSectionAction | null>;
}

type SystemEventDocumentTopElem = XmlTopElem &
MsVariablesBase & {
  Doc: SystemEventDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  linked_system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  perfom_condition: XmlElem<string | null>;
  is_active: XmlElem<boolean>;
  sections: XmlMultiElem<SystemEventDocumentSection | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type SystemEventDocument = XmlDocument & {
  TopElem: SystemEventDocumentTopElem;
  system_event: SystemEventDocumentTopElem;
  DocDesc(): string;
};
