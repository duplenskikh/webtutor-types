interface OutstaffOrderExecutionDocumentStage extends CostCurrencyBase, CustomElemsBase {
  id: XmlElem<string | null>;
  parent_stage_id: XmlElem<string | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  provider_person_fullname: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  hour_num: XmlElem<number>;
  hours_worked: XmlElem<number>;
  is_assist: XmlElem<boolean>;
  outstaff_order_execution_status_type: XmlElem<string | null, typeof common.outstaff_order_execution_status_types>;
  comment: XmlElem<string | null>;
}

type OutstaffOrderExecutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderExecutionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name(): string;
  status: XmlElem<string, typeof common.order_status_types>;
  formed_date: XmlElem<Date | null>;
  paid_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string | null>;
  outstaff_provider_id: XmlElem<number | null, OutstaffProviderCatalogDocumentTopElem>;
  outstaff_contract_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  outstaff_contract_name: XmlElem<string | null>;
  outstaff_order_id: XmlElem<number | null, OutstaffContractCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string | null>;
  stage_num: XmlElem<number>;
  stages: XmlMultiElem<OutstaffOrderExecutionDocumentStage | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  update_stages(): unknown;
};

type OutstaffOrderExecutionDocument = XmlDocument & {
  TopElem: OutstaffOrderExecutionDocumentTopElem;
  outstaff_order_execution: OutstaffOrderExecutionDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
