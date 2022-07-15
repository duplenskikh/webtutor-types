interface IndicatorView {
  selector?: XmlElem<string>;
  knowledge_classifier_id?: XmlElem<number>;
  knowledge_sort_type_id?: XmlElem<string>;
}

interface IndicatorTopElem extends XmlTopElem<IndicatorDocument>, ObjectCodeNameBase, CompetenceScaleBase, CompetenceLevelBase, KnowledgePartsBase, KnowledgePartsBaseOld, AdminAccessBase, CustomElemsBase, FileListBase {
  competence_id?: XmlElem<number>;
  type?: XmlElem<number>;
  comment?: XmlElem<string>;
  positive_comment?: XmlElem<string>;
  negative_comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<IndicatorView>;
}

type IndicatorDocument = XmlDocument<IndicatorTopElem>;
