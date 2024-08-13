type DnControlFormDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnControlFormDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnControlFormDocument = XmlDocument & {
  TopElem: DnControlFormDocumentTopElem;
  dn_control_form: DnControlFormDocumentTopElem;
  DocDesc(): string;
};
