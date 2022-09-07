type ExerciseDocumentTopElem = XmlTopElem & { Doc: ExerciseDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  section: XmlElem<string>;
  comment: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  doc_info: XmlElem<DocInfoBase>;
}

type ExerciseDocument = XmlDocument & {
  TopElem: ExerciseDocumentTopElem;
};
