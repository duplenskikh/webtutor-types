type DnEducatEventDocumentTopElem = XmlTopElem &
CustomElemsBase &
AdminAccessBase & {
  Doc: DnEducatEventDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEducatEventDocument = XmlDocument & {
  TopElem: DnEducatEventDocumentTopElem;
  dn_educat_event: DnEducatEventDocumentTopElem;
  DocDesc(): string;
};
