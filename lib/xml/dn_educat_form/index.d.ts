interface DnEducatFormView {
  selector?: XmlElem<string>;
}

interface DnEducatFormTopElem extends XmlTopElem<DnEducatFormDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnEducatFormView>;
}

type DnEducatFormDocument = XmlDocument<DnEducatFormTopElem>;
