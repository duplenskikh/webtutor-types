type OutstaffOrderCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.order_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  agreement_person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  cost_hour: XmlElem<number>;
  cost_sum: XmlElem<number>;
  formed_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
