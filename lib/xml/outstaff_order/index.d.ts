interface OutstaffOrderDocumentPeriodHour {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_hour: XmlElem<number | null>;
  finish_hour: XmlElem<number | null>;
  hour_num: XmlElem<number | null>;
  full_time: XmlElem<boolean | null>;
  person_num: XmlElem<number>;
}

interface OutstaffOrderDocumentPeriod {
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  hours: XmlMultiElem<OutstaffOrderDocumentPeriodHour | null>;
  sum_person(): number;
  sum_person_hour(): number;
}

type OutstaffOrderDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  status: XmlElem<string, typeof common.order_status_types>;
  formed_date: XmlElem<Date | null>;
  paid_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  period_type: XmlElem<string>;
  periods: XmlMultiElem<OutstaffOrderDocumentPeriod | null>;
  periods_sum_person(): unknown;
  periods_sum_person_hour(): unknown;
  cost_hour: XmlElem<number | null>;
  cost_sum: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  agreement_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  update_periods(): unknown;
};

type OutstaffOrderDocument = XmlDocument & {
  TopElem: OutstaffOrderDocumentTopElem;
  outstaff_order: OutstaffOrderDocumentTopElem;
  OnInit(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};
