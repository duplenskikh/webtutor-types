type ReprimandTypeDocumentTopElem = XmlTopElem & { Doc: ReprimandTypeDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ReprimandTypeDocument = XmlDocument & {
  TopElem: ReprimandTypeDocumentTopElem;
};
