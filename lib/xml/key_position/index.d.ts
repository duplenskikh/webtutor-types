interface KeyPositionDocumentRiskLevel {
  risk_level_id: XmlElem<number, RiskLevelCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionCommon {
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionName {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type KeyPositionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase &
ViewConditionsBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: KeyPositionDocument;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  risk_perspective_id: XmlElem<number, RiskPerspectiveCatalogDocumentTopElem>;
  key_position_threat_id: XmlElem<number, KeyPositionThreatCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.key_position_status_types>;
  is_open: XmlElem<boolean>;
  position_type: XmlElem<string>;
  risk_levels: XmlMultiElem<KeyPositionDocumentRiskLevel>;
  position_commons: XmlMultiElem<KeyPositionDocumentPositionCommon>;
  position_names: XmlMultiElem<KeyPositionDocumentPositionName>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  role_id: XmlMultiElemObject<number>;
  EvalThreat(arrRiskLevels: unknown, fldRiskPerspective: unknown, keyPositionId: number): unknown;
};

type KeyPositionDocument = XmlDocument & {
  TopElem: KeyPositionDocumentTopElem;
  key_position: KeyPositionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
