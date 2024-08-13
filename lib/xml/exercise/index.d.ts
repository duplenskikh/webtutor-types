type ExerciseDocumentTopElem = XmlTopElem & {
  Doc: ExerciseDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  section: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExerciseDocument = XmlDocument & {
  TopElem: ExerciseDocumentTopElem;
  exercise: ExerciseDocumentTopElem;
  DocDesc(): string;
};
