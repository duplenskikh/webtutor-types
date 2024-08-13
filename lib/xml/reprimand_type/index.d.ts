type ReprimandTypeDocumentTopElem = XmlTopElem & {
  Doc: ReprimandTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ReprimandTypeDocument = XmlDocument & {
  TopElem: ReprimandTypeDocumentTopElem;
  reprimand_type: ReprimandTypeDocumentTopElem;
  DocDesc(): string;
};
