type DnEducatFormDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: DnEducatFormDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEducatFormDocument = XmlDocument & {
  TopElem: DnEducatFormDocumentTopElem;
  dn_educat_form: DnEducatFormDocumentTopElem;
  DocDesc(): string;
};
