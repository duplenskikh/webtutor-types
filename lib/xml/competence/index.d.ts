interface CompetenceExercise {
  exercise_id?: XmlElem<number>;
}

interface CompetenceView extends DescBase {
  selector?: XmlElem<string>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface CompetenceTopElem extends XmlTopElem<CompetenceDocument>, ObjectCodeNameBase, CompetenceScaleBase, CompetenceLevelBase, KnowledgePartsBase, KnowledgePartsBaseOld, CustomElemsBase, FileListBase, AdminAccessBase {
  competence_block_id?: XmlElem<number>;
  positive_comment?: XmlElem<string>;
  negative_comment?: XmlElem<string>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  exercises?: XmlMultiElem<CompetenceExercise>;
  view?: XmlElem<CompetenceView>;
}

type CompetenceDocument = XmlDocument<CompetenceTopElem>;
