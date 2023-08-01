interface CollaboratorScheduleDocumentPeriod extends ObjectTypeBase,
  CustomElemsBase {
  id: XmlElem<string>;
  presence_state_id: XmlElem<number>;
  subdivision_id: XmlElem<number>;
  state_id: XmlElem<string>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  comment: XmlElem<string>;
}

type CollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: CollaboratorScheduleDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  date: XmlElem<Date>;
  start_time: XmlElem<string>;
  finish_time: XmlElem<string>;
  presence_state_id: XmlElem<number>;
  schedule_type_id: XmlElem<number>;
  state_id: XmlElem<string>;
  approval_date: XmlElem<Date>;
  approval_person_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  rest_collaborator_schedule_id: XmlElem<number>;
  interval_schedule_id: XmlElem<number>;
  schedule_day_id: XmlElem<number>;
  periods: XmlMultiElem<CollaboratorScheduleDocumentPeriod>;
  reason_comment: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CollaboratorScheduleDocument = XmlDocument & {
  TopElem: CollaboratorScheduleDocumentTopElem;
};
