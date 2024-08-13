interface PresenceStateDocumentDisplayField {
  value: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

interface PresenceStateDocumentRequiredField {
  value: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type PresenceStateDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: PresenceStateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof lists.person_states>;
  state_name: XmlElem<string | null>;
  accessible: XmlElem<boolean>;
  is_absence: XmlElem<boolean>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  can_cancel: XmlElem<boolean>;
  can_change: XmlElem<boolean>;
  cancel_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  change_workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  style_css: XmlElem<string | null>;
  all_day: XmlElem<boolean>;
  is_sub_work_time: XmlElem<boolean>;
  display_fields: XmlMultiElem<PresenceStateDocumentDisplayField | null>;
  required_fields: XmlMultiElem<PresenceStateDocumentRequiredField | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type PresenceStateDocument = XmlDocument & {
  TopElem: PresenceStateDocumentTopElem;
  presence_state: PresenceStateDocumentTopElem;
  OnBeforeSave(): void;
};
