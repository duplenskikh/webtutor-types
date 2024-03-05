type RegionDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: RegionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RegionDocument = XmlDocument & {
  TopElem: RegionDocumentTopElem;
};
