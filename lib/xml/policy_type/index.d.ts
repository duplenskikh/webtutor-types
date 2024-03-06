type PolicyTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: PolicyTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PolicyTypeDocument = XmlDocument & {
  TopElem: PolicyTypeDocumentTopElem;
  policy_type: PolicyTypeDocumentTopElem;

};
