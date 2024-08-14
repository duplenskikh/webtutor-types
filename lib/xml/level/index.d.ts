interface LevelDocumentCurrencyType {
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
}

type LevelDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: LevelDocument;
  prev_level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  min_value: XmlElem<number | null>;
  max_value: XmlElem<number | null>;
  /** Валюта */
  currency_types: XmlMultiElem<LevelDocumentCurrencyType | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LevelDocument = XmlDocument & {
  TopElem: LevelDocumentTopElem;
  level: LevelDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
