interface IntervalScheduleDocumentWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
}

interface IntervalScheduleDocumentCustomField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

type IntervalScheduleDocumentTopElem = XmlTopElem & { Doc: IntervalScheduleDocument } & 
PersonFillingBase &
WorkflowDataBase &
FileListBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  presence_state_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  workflow_type?: XmlElem<string>;
  workflow_matchings?: XmlMultiElem<IntervalScheduleDocumentWorkflowMatching>;
  workflow_matching_type?: XmlElem<string>;
  custom_fields?: XmlMultiElem<IntervalScheduleDocumentCustomField>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type IntervalScheduleDocument = XmlDocument & { TopElem: IntervalScheduleDocumentTopElem; };
