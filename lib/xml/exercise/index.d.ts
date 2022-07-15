interface ExerciseView {
  selector?: XmlElem<string>;
}

interface ExerciseTopElem extends XmlTopElem<ExerciseDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  section?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<ExerciseView>;
}

type ExerciseDocument = XmlDocument<ExerciseTopElem>;
