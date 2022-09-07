type EventResultDocumentTopElem = XmlTopElem & { Doc: EventResultDocument } & 
PersonFillingBase &
ExpenseDistributionBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  person_id: XmlElem<number>;
  event_result_type_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
  is_confirm: XmlElem<boolean>;
  is_banned: XmlElem<boolean>;
  not_participate: XmlElem<boolean>;
  last_sending_date: XmlElem<Date>;
  last_webinar_activity_date: XmlElem<Date>;
  webinar_activity_time: XmlElem<number>;
  is_open: XmlElem<boolean>;
  score: XmlElem<number>;
  tutor_comment: XmlElem<string>;
  collaborator_comment: XmlElem<string>;
  not_pay: XmlElem<boolean>;
  default_cost_center_id: XmlElem<number>;
  cost_center_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  certificate_id: XmlElem<number>;
  guest: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type EventResultDocument = XmlDocument & { TopElem: EventResultDocumentTopElem; };
