interface KeyPositionRiskLevel {
  risk_level_id?: XmlElem<number>;
}

interface KeyPositionPositionCommon {
  position_common_id?: XmlElem<number>;
}

interface KeyPositionPositionName {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface KeyPositionView extends DescBase {
}

interface KeyPositionTopElem extends XmlTopElem<KeyPositionDocument>, ObjectCodeNameBase, PersonFillingBase, ViewConditionsBase, TalentPoolFuncManagersBase, FileListBase, AdminAccessBase, CustomElemsBase {
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
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  risk_levels?: XmlMultiElem<KeyPositionRiskLevel>;
  position_commons?: XmlMultiElem<KeyPositionPositionCommon>;
  position_names?: XmlMultiElem<KeyPositionPositionName>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KeyPositionView>;
  EvalThreat?(): any;
}

type KeyPositionDocument = XmlDocument<KeyPositionTopElem>;
