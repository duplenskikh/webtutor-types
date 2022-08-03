interface CareerPlanDocumentStage {
  id: XmlElem<string>;
  name: XmlElem<string>;
  career_transition_direction: XmlElem<string>;
  position_common_id: XmlElem<number>;
  check_requirements: XmlElem<boolean>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status: XmlElem<string>;
  position_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
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
  status: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  stages: XmlMultiElem<CareerPlanDocumentStage>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElem<number>;
}

type CareerPlanDocument = XmlDocument & {
  TopElem: CareerPlanDocumentTopElem;
};
