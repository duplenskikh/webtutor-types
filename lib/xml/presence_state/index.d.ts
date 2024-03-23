interface PresenceStateDocumentDisplayField {
  value: XmlElem<string>;
  comment: XmlElem<string>;
}

interface PresenceStateDocumentRequiredField {
  value: XmlElem<string>;
  comment: XmlElem<string>;
}

type PresenceStateDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: PresenceStateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  state_id: XmlElem<string, typeof lists.person_states>;
  state_name: XmlElem<string>;
  accessible: XmlElem<boolean>;
  is_absence: XmlElem<boolean>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  can_cancel: XmlElem<boolean>;
  can_change: XmlElem<boolean>;
  cancel_workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  change_workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  position: XmlElem<number>;
  style_css: XmlElem<string>;
  all_day: XmlElem<boolean>;
  is_sub_work_time: XmlElem<boolean>;
  display_fields: XmlMultiElem<PresenceStateDocumentDisplayField>;
  required_fields: XmlMultiElem<PresenceStateDocumentRequiredField>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type PresenceStateDocument = XmlDocument & {
  TopElem: PresenceStateDocumentTopElem;
  presence_state: PresenceStateDocumentTopElem;
  OnBeforeSave(): void;
};
