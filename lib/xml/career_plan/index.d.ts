interface CareerPlanDocumentStage {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  career_transition_direction: XmlElem<string, typeof common.career_transition_direction_types>;
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
  check_requirements: XmlElem<boolean>;
  plan_date: XmlElem<Date | null>;
  fact_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  stipulation: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type CareerPlanDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CareerPlanDocument;
  start_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.career_reserve_status_types>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  typical_career_plan_id: XmlElem<number | null, CareerPlanCatalogDocumentTopElem>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  stages: XmlMultiElem<CareerPlanDocumentStage | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type CareerPlanDocument = XmlDocument & {
  TopElem: CareerPlanDocumentTopElem;
  career_plan: CareerPlanDocumentTopElem;
};
