interface DnTermTopElem extends XmlTopElem<DnTermDocument>, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  str_term?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type DnTermDocument = XmlDocument<DnTermTopElem>;
