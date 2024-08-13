type RegionDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: RegionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_object_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RegionDocument = XmlDocument & {
  TopElem: RegionDocumentTopElem;
  region: RegionDocumentTopElem;
  DocDesc(): string;
};
