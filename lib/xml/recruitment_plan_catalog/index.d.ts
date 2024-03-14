type RecruitmentPlanCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  state: XmlElem<string, typeof common.recruitment_plan_state_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_group_id: XmlElem<number, SubdivisionGroupCatalogDocumentTopElem>;
  position_family_id: XmlElem<number, PositionFamilyCatalogDocumentTopElem>;
  position_type: XmlElem<string>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  vacancy_type_id: XmlElem<number, VacancyTypeCatalogDocumentTopElem>;
  quantity: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
