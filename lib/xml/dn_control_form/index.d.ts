type DnControlFormDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnControlFormDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnControlFormDocument = XmlDocument & {
  TopElem: DnControlFormDocumentTopElem;
  dn_control_form: DnControlFormDocumentTopElem;
  DocDesc(): unknown;
};
