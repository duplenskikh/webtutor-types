interface LevelDocumentCurrencyType {
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
}

type LevelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: LevelDocument;
  prev_level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
  currency_types: XmlMultiElem<LevelDocumentCurrencyType | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LevelDocument = XmlDocument & {
  TopElem: LevelDocumentTopElem;
  level: LevelDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
