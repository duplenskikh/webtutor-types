type SuccessorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SuccessorDocument;
  id: XmlElem<number>;
  name: XmlElem<string>;
  key_position_id: XmlElem<number, KeyPositionCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  readiness_level_id: XmlElem<number, ReadinessLevelCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number, EfficiencyEstimationCatalogDocumentTopElem>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.successor_status_types>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type SuccessorDocument = XmlDocument & {
  TopElem: SuccessorDocumentTopElem;
};
