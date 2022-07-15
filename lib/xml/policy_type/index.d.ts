interface PolicyTypeView extends DescBase {
}

interface PolicyTypeTopElem extends XmlTopElem<PolicyTypeDocument>, FileListBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  provider?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<PolicyTypeView>;
}

type PolicyTypeDocument = XmlDocument<PolicyTypeTopElem>;
