type EventResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
ExpenseDistributionBase &
FileListBase &
AdminAccessBase &
CustomElemsBase &
CustomDatasBase & {
  Doc: EventResultDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  event_name: XmlElem<string | null>;
  event_start_date: XmlElem<Date | null>;
  status_id: XmlElem<string | null, typeof common.event_result_status_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  event_result_type_id: XmlElem<number | null, EventResultTypeCatalogDocumentTopElem>;
  is_assist: XmlElem<boolean>;
  is_confirm: XmlElem<boolean>;
  is_banned: XmlElem<boolean>;
  not_participate: XmlElem<boolean>;
  last_sending_date: XmlElem<Date | null>;
  last_webinar_activity_date: XmlElem<Date | null>;
  webinar_activity_time: XmlElem<number | null>;
  is_open: XmlElem<boolean>;
  score: XmlElem<number | null>;
  tutor_comment: XmlElem<string | null>;
  collaborator_comment: XmlElem<string | null>;
  not_pay: XmlElem<boolean>;
  default_cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  object_resource_id: XmlElem<number | null, ObjectResourceCatalogDocumentTopElem>;
  certificate_id: XmlElem<number | null, CertificateCatalogDocumentTopElem>;
  guest: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type EventResultDocument = XmlDocument & {
  TopElem: EventResultDocumentTopElem;
  event_result: EventResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
