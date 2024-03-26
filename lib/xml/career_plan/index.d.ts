interface CareerPlanDocumentStage {
  id: XmlElem<string>;
  name: XmlElem<string>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
  check_requirements: XmlElem<boolean>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  stipulation: XmlElem<string>;
  comment: XmlElem<string>;
}

type CareerPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerPlanDocument;
  start_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  typical_career_plan_id: XmlElem<number, CareerPlanCatalogDocumentTopElem>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  stages: XmlMultiElem<CareerPlanDocumentStage>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
};

type CareerPlanDocument = XmlDocument & {
  TopElem: CareerPlanDocumentTopElem;
  career_plan: CareerPlanDocumentTopElem;
};
