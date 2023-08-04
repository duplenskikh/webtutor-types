type ObjectResourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ObjectResourceDocument;
  type: XmlElem<string>;
  state_id: XmlElem<string>;
  count: XmlElem<number>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  small_desc: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ObjectResourceDocument = XmlDocument & {
  TopElem: ObjectResourceDocumentTopElem;
};
