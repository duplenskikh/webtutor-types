type ProviderDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: ProviderDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  provider_product: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  dimension_id: XmlElem<number | null, DimensionCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  desc: XmlElem<string | null>;
};

type ProviderDocument = XmlDocument & {
  TopElem: ProviderDocumentTopElem;
  provider: ProviderDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
