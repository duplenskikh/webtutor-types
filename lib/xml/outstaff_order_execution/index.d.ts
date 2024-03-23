interface OutstaffOrderExecutionDocumentStage extends CostCurrencyBase, CustomElemsBase {
  id: XmlElem<string>;
  parent_stage_id: XmlElem<string>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  provider_person_fullname: XmlElem<string>;
  date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  hour_num: XmlElem<number>;
  hours_worked: XmlElem<number>;
  is_assist: XmlElem<boolean>;
  outstaff_order_execution_status_type: XmlElem<string, typeof common.outstaff_order_execution_status_types>;
  comment: XmlElem<string>;
}

type OutstaffOrderExecutionDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: OutstaffOrderExecutionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): string;
  status: XmlElem<string, typeof common.order_status_types>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  collaborator_fullname: XmlElem<string>;
  outstaff_provider_id: XmlElem<number, OutstaffProviderCatalogDocumentTopElem>;
  outstaff_contract_id: XmlElem<number, OutstaffContractCatalogDocumentTopElem>;
  outstaff_contract_name: XmlElem<string>;
  outstaff_order_id: XmlElem<number, OutstaffContractCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string>;
  stage_num: XmlElem<number>;
  stages: XmlMultiElem<OutstaffOrderExecutionDocumentStage>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  update_stages(): unknown;
};

type OutstaffOrderExecutionDocument = XmlDocument & {
  TopElem: OutstaffOrderExecutionDocumentTopElem;
  outstaff_order_execution: OutstaffOrderExecutionDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
