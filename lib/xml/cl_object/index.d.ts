interface ClObjectDocumentPage {
  name: XmlElem<string>;
  width: XmlElem<number>;
  height: XmlElem<number>;
  xmlcontent: XmlElem<string>;
}

interface ClObjectDocumentMethod {
  name: XmlElem<string>;
  label: XmlElem<string>;
  access: XmlElem<string>;
  xmlcontent: XmlElem<string>;
}

type ClObjectDocumentTopElem = XmlTopElem & {
  Doc: ClObjectDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  width: XmlElem<number>;
  height: XmlElem<number>;
  format: XmlElem<string>;
  group: XmlElem<string, typeof common.cl_object_groups>;
  pages: XmlMultiElem<ClObjectDocumentPage>;
  methods: XmlMultiElem<ClObjectDocumentMethod>;
  xsl: XmlElem<string>;
  xsl_sharp: XmlElem<string>;
  resource_url: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type ClObjectDocument = XmlDocument & {
  TopElem: ClObjectDocumentTopElem;
  cl_object: ClObjectDocumentTopElem;
  DocDesc(): unknown;
};
