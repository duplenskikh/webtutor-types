type ExerciseDocumentTopElem = XmlTopElem & {
  Doc: ExerciseDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  section: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExerciseDocument = XmlDocument & {
  TopElem: ExerciseDocumentTopElem;
  exercise: ExerciseDocumentTopElem;
  DocDesc(): string;
};
