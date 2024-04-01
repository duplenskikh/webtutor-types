interface DlgSelectProtocolDocumentProtocol {
  name: XmlElem<string>;
  text: XmlElem<string>;
  checked: XmlElem<boolean>;
}

type DlgSelectProtocolDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectProtocolDocument;
  protocol_index: XmlElem<number>;
  title: XmlElem<string>;
  text: XmlElem<string>;
  multi_select: XmlElem<boolean>;
  protocols: XmlMultiElem<DlgSelectProtocolDocumentProtocol>;
  add_protocol(text: string, name: string, checked: boolean): unknown;
};

type DlgSelectProtocolDocument = XmlDocument & {
  TopElem: DlgSelectProtocolDocumentTopElem;
  dlg_select_protocol: DlgSelectProtocolDocumentTopElem;
};
