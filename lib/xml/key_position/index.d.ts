interface KeyPositionDocumentRiskLevel {
  risk_level_id: XmlElem<number | null, RiskLevelCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface KeyPositionDocumentPositionName {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
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
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  risk_perspective_id: XmlElem<number | null, RiskPerspectiveCatalogDocumentTopElem>;
  key_position_threat_id: XmlElem<number | null, KeyPositionThreatCatalogDocumentTopElem>;
  career_reserve_type_id: XmlElem<number | null, CareerReserveTypeCatalogDocumentTopElem>;
  status: XmlElem<string, typeof common.key_position_status_types>;
  is_open: XmlElem<boolean>;
  position_type: XmlElem<string>;
  risk_levels: XmlMultiElem<KeyPositionDocumentRiskLevel | null>;
  position_commons: XmlMultiElem<KeyPositionDocumentPositionCommon | null>;
  position_names: XmlMultiElem<KeyPositionDocumentPositionName | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  role_id: XmlMultiElemObject<number | null>;
  EvalThreat(arrRiskLevels: unknown, fldRiskPerspective: unknown, keyPositionId: number): unknown;
};

type KeyPositionDocument = XmlDocument & {
  TopElem: KeyPositionDocumentTopElem;
  key_position: KeyPositionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
