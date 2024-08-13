type ProviderDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: ProviderDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  provider_product: XmlElem<boolean | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  dimension_id: XmlElem<number | null, DimensionCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
};

type ProviderDocument = XmlDocument & {
  TopElem: ProviderDocumentTopElem;
  provider: ProviderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
