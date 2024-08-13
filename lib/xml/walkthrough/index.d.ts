type WalkthroughDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: WalkthroughDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  external_system_id: XmlElem<number | null, ExternalSystemCatalogDocumentTopElem>;
  xml: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WalkthroughDocument = XmlDocument & {
  TopElem: WalkthroughDocumentTopElem;
  walkthrough: WalkthroughDocumentTopElem;
  DocDesc(): string;
};
