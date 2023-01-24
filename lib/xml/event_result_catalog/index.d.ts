type EventResultCatalogDocumentTopElem = XmlTopElem & { Doc: EventResultCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  request_id: XmlElem<number>;
  event_result_type_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
  is_confirm: XmlElem<boolean>;
  is_banned: XmlElem<boolean>;
  not_participate: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  score: XmlElem<number>;
  last_sending_date: XmlElem<Date>;
  budget_period_id: XmlElem<number>;
  cost_center_id: XmlElem<number>;
  not_pay: XmlElem<boolean>;
  guest: XmlElem<boolean>;
  expense_sum: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  certificate_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EventResultCatalogDocument = XmlDocument & { TopElem: EventResultCatalogDocumentTopElem; };
