type PolicyTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: PolicyTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  provider: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PolicyTypeDocument = XmlDocument & {
  TopElem: PolicyTypeDocumentTopElem;
  policy_type: PolicyTypeDocumentTopElem;
};
