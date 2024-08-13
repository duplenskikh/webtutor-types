type ReadinessLevelDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: ReadinessLevelDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type ReadinessLevelDocument = XmlDocument & {
  TopElem: ReadinessLevelDocumentTopElem;
  readiness_level: ReadinessLevelDocumentTopElem;
  DocDesc(): string;
};
