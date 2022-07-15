interface LevelCurrencyType {
  currency_type_id?: XmlElem<string>;
  min_value?: XmlElem<number>;
  max_value?: XmlElem<number>;
}

interface LevelView extends DescBase {
}

interface LevelTopElem extends XmlTopElem<LevelDocument>, ObjectCodeNameBase {
  prev_level_id?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  min_value?: XmlElem<number>;
  max_value?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  currency_types?: XmlMultiElem<LevelCurrencyType>;
  view?: XmlElem<LevelView>;
}

type LevelDocument = XmlDocument<LevelTopElem>;
