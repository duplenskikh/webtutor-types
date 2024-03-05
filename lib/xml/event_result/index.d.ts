type EventResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
ExpenseDistributionBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: EventResultDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string>;
  event_start_date: XmlElem<Date>;
  status_id: XmlElem<string, typeof common.event_result_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  event_result_type_id: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
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
  default_cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
  certificate_id: XmlElem<number, CertificateCatalogDocumentTopElem>;
  guest: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type EventResultDocument = XmlDocument & {
  TopElem: EventResultDocumentTopElem;
};
