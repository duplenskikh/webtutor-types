type SuccessorDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SuccessorDocument;
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  key_position_id: XmlElem<number | null, KeyPositionCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  readiness_level_id: XmlElem<number | null, ReadinessLevelCatalogDocumentTopElem>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.successor_status_types>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type SuccessorDocument = XmlDocument & {
  TopElem: SuccessorDocumentTopElem;
  successor: SuccessorDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
