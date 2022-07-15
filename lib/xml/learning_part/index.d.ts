interface LearningPartView {
  part_index?: XmlElem<number>;
  result_tab_selector?: XmlElem<string>;
}

interface LearningPartTopElem extends XmlTopElem<LearningPartDocument>, CoreLessonBase, AnnalsObjectsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  learning_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<LearningPartView>;
}

type LearningPartDocument = XmlDocument<LearningPartTopElem>;
