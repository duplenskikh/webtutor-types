interface CareerPlanStage {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  career_transition_direction?: XmlElem<string>;
  position_common_id?: XmlElem<number>;
  check_requirements?: XmlElem<boolean>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  position_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  stipulation?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface CareerPlanTopElem extends XmlTopElem<CareerPlanDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase {
  start_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  stages?: XmlMultiElem<CareerPlanStage>;
  access?: XmlElem<AccessDocBase>;
}

type CareerPlanDocument = XmlDocument<CareerPlanTopElem>;
