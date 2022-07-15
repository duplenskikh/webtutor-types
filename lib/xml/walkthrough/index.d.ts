interface WalkthroughView {
  selector?: XmlElem<string>;
}

interface WalkthroughTopElem extends XmlTopElem<WalkthroughDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  external_system_id?: XmlElem<number>;
  xml?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<WalkthroughView>;
}

type WalkthroughDocument = XmlDocument<WalkthroughTopElem>;
