interface ReprimandTypeView {
  selector?: XmlElem<string>;
}

interface ReprimandTypeTopElem extends XmlTopElem<ReprimandTypeDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<ReprimandTypeView>;
}

type ReprimandTypeDocument = XmlDocument<ReprimandTypeTopElem>;
