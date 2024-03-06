type ProviderDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: ProviderDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider_product: XmlElem<boolean>;
  comment: XmlElem<string>;
  dimension_id: XmlElem<number, DimensionCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
};

type ProviderDocument = XmlDocument & {
  TopElem: ProviderDocumentTopElem;
  provider: ProviderDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};
