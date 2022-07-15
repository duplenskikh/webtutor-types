interface DnEducatEventView {
  selector?: XmlElem<string>;
}

interface DnEducatEventTopElem extends XmlTopElem<DnEducatEventDocument>, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnEducatEventView>;
}

type DnEducatEventDocument = XmlDocument<DnEducatEventTopElem>;
