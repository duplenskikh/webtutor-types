type OutstaffOrderExecutionCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.order_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  collaborator_fullname: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_common_name: XmlElem<string>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  outstaff_contract_id: XmlElem<number, OutstaffContractCatalogDocumentTopElem>;
  outstaff_contract_name: XmlElem<string>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
