type PolicyTypeDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: PolicyTypeDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  provider: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PolicyTypeDocument = XmlDocument & {
  TopElem: PolicyTypeDocumentTopElem;
  policy_type: PolicyTypeDocumentTopElem;
};
