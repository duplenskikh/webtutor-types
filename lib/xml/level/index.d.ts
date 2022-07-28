interface LevelDocumentCurrencyType {
  currency_type_id?: XmlElem<string>;
  min_value?: XmlElem<number>;
  max_value?: XmlElem<number>;
}

type LevelDocumentTopElem = XmlTopElem & { Doc: LevelDocument } & 
  ObjectCodeNameBase & {
  prev_level_id?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  min_value?: XmlElem<number>;
  max_value?: XmlElem<number>;
  currency_types?: XmlMultiElem<LevelDocumentCurrencyType>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type LevelDocument = XmlDocument & { TopElem: LevelDocumentTopElem; };
