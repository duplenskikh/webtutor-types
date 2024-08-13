interface IntervalScheduleDocumentWorkflowMatching {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface IntervalScheduleDocumentCustomField {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface IntervalScheduleDocumentHistory {
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

interface IntervalScheduleDocumentChange {
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
}

type IntervalScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase & {
  Doc: IntervalScheduleDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  presence_state_id: XmlElem<number | null, PresenceStateCatalogDocumentTopElem>;
  status_id: XmlElem<string | null, typeof common.agreement_status_types>;
  workflow_type: XmlElem<string | null>;
  workflow_matchings: XmlMultiElem<IntervalScheduleDocumentWorkflowMatching | null>;
  workflow_matching_type: XmlElem<string | null>;
  custom_fields: XmlMultiElem<IntervalScheduleDocumentCustomField | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  history: XmlElem<IntervalScheduleDocumentHistory | null>;
  change: XmlElem<IntervalScheduleDocumentChange | null>;
};

type IntervalScheduleDocument = XmlDocument & {
  TopElem: IntervalScheduleDocumentTopElem;
  interval_schedule: IntervalScheduleDocumentTopElem;
  OnBeforeSave(): void;
};
