type WalkthroughDocumentTopElem = XmlTopElem & { Doc: WalkthroughDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  external_system_id: XmlElem<number>;
  xml: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type WalkthroughDocument = XmlDocument & { TopElem: WalkthroughDocumentTopElem; };
