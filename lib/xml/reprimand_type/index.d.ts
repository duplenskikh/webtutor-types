type ReprimandTypeDocumentTopElem = XmlTopElem & {
  Doc: ReprimandTypeDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ReprimandTypeDocument = XmlDocument & {
  TopElem: ReprimandTypeDocumentTopElem;
  reprimand_type: ReprimandTypeDocumentTopElem;
  DocDesc(): string;
};
