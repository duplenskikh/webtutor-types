interface DnControlFormView {
  selector?: XmlElem<string>;
}

interface DnControlFormTopElem extends XmlTopElem<DnControlFormDocument>, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnControlFormView>;
}

type DnControlFormDocument = XmlDocument<DnControlFormTopElem>;
