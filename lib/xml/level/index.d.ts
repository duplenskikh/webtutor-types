interface LevelDocumentCurrencyType {
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  min_value: XmlElem<number>;
  max_value: XmlElem<number>;
}

type LevelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: LevelDocument;
  prev_level_id: XmlElem<number, LevelCatalogDocumentTopElem>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  min_value: XmlElem<number>;
  max_value: XmlElem<number>;
  currency_types: XmlMultiElem<LevelDocumentCurrencyType>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LevelDocument = XmlDocument & {
  TopElem: LevelDocumentTopElem;
  level: LevelDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
