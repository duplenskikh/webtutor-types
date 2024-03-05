interface IntervalScheduleDocumentWorkflowMatching {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

interface IntervalScheduleDocumentCustomField {
  name: XmlElem<string>;
  value: XmlElem<string>;
}

interface IntervalScheduleDocumentHistory {
  status_id: XmlElem<string, typeof common.agreement_status_types>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

interface IntervalScheduleDocumentChange {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
}

type IntervalScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase & {
  Doc: IntervalScheduleDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  presence_state_id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.agreement_status_types>;
  workflow_type: XmlElem<string>;
  workflow_matchings: XmlMultiElem<IntervalScheduleDocumentWorkflowMatching>;
  workflow_matching_type: XmlElem<string>;
  custom_fields: XmlMultiElem<IntervalScheduleDocumentCustomField>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  history: XmlElem<IntervalScheduleDocumentHistory>;
  change: XmlElem<IntervalScheduleDocumentChange>;
};

type IntervalScheduleDocument = XmlDocument & {
  TopElem: IntervalScheduleDocumentTopElem;
};
