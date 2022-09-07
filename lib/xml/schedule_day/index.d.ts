type ScheduleDayDocumentTopElem = XmlTopElem & { Doc: ScheduleDayDocument } & 
CustomElemsBase & {
  id: XmlElem<number>;
  schedule_type_id: XmlElem<number>;
  schedule_type_name: XmlElem<string>;
  rest_collaborator_schedule_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  date: XmlElem<Date>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ScheduleDayDocument = XmlDocument & { TopElem: ScheduleDayDocumentTopElem; };
