interface OutstaffOrderDocumentPeriodHour {
  id: XmlElem<string>;
  name: XmlElem<string>;
  start_hour: XmlElem<number>;
  finish_hour: XmlElem<number>;
  hour_num: XmlElem<number>;
  full_time: XmlElem<boolean>;
  person_num: XmlElem<number>;
}

interface OutstaffOrderDocumentPeriod {
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  hours: XmlMultiElem<OutstaffOrderDocumentPeriodHour>;
  sum_person(): number;
  sum_person_hour(): number;
}

type OutstaffOrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  status: XmlElem<string, typeof common.order_status_types>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  outstaff_provider_id: XmlElem<number, OutstaffProviderCatalogDocumentTopElem>;
  outstaff_contract_id: XmlElem<number, OutstaffContractCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  period_type: XmlElem<string>;
  periods: XmlMultiElem<OutstaffOrderDocumentPeriod>;
  periods_sum_person(): unknown;
  periods_sum_person_hour(): unknown;
  cost_hour: XmlElem<number>;
  cost_sum: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  agreement_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  update_periods(): unknown;
};

type OutstaffOrderDocument = XmlDocument & {
  TopElem: OutstaffOrderDocumentTopElem;
  outstaff_order: OutstaffOrderDocumentTopElem;
  OnInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
