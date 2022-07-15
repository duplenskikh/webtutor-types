interface ClObjectPage {
  name?: XmlElem<string>;
  width?: XmlElem<number>;
  height?: XmlElem<number>;
  xmlcontent?: XmlElem<string>;
}

interface ClObjectMethod {
  name?: XmlElem<string>;
  label?: XmlElem<string>;
  access?: XmlElem<string>;
  xmlcontent?: XmlElem<string>;
}

interface ClObjectView {
  selector?: XmlElem<string>;
}

interface ClObjectTopElem extends XmlTopElem<ClObjectDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  width?: XmlElem<number>;
  height?: XmlElem<number>;
  format?: XmlElem<string>;
  group?: XmlElem<string>;
  xsl?: XmlElem<string>;
  xsl_sharp?: XmlElem<string>;
  resource_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  pages?: XmlMultiElem<ClObjectPage>;
  methods?: XmlMultiElem<ClObjectMethod>;
  view?: XmlElem<ClObjectView>;
}

type ClObjectDocument = XmlDocument<ClObjectTopElem>;
