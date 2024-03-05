type WalkthroughDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: WalkthroughDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  external_system_id: XmlElem<number, ExternalSystemCatalogDocumentTopElem>;
  xml: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type WalkthroughDocument = XmlDocument & {
  TopElem: WalkthroughDocumentTopElem;
};
