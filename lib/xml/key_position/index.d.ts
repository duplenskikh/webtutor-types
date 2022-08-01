interface KeyPositionDocumentRiskLevel {
  risk_level_id?: XmlElem<number>;
}

interface KeyPositionDocumentPositionCommon {
  position_common_id?: XmlElem<number>;
}

interface KeyPositionDocumentPositionName {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

type KeyPositionDocumentTopElem = XmlTopElem & { Doc: KeyPositionDocument } & 
ObjectCodeNameBase &
PersonFillingBase &
ViewConditionsBase &
TalentPoolFuncManagersBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  risk_perspective_id?: XmlElem<number>;
  key_position_threat_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  is_open?: XmlElem<boolean>;
  position_type?: XmlElem<string>;
  risk_levels?: XmlMultiElem<KeyPositionDocumentRiskLevel>;
  position_commons?: XmlMultiElem<KeyPositionDocumentPositionCommon>;
  position_names?: XmlMultiElem<KeyPositionDocumentPositionName>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  role_id?: XmlMultiElem<number>;
  EvalThreat?(): unknown;
}

type KeyPositionDocument = XmlDocument & { TopElem: KeyPositionDocumentTopElem; };
