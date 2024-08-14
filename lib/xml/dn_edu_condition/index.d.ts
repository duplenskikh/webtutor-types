type DnEduConditionDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: DnEduConditionDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEduConditionDocument = XmlDocument & {
  TopElem: DnEduConditionDocumentTopElem;
  dn_edu_condition: DnEduConditionDocumentTopElem;
  DocDesc(): string;
};
