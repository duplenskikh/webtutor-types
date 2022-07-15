interface RecommenderSelectCollaboratorBaseObject extends ObjectTypeBase {
}

interface RecommenderSelectCollaboratorSelectedObject extends ObjectTypeBase {
}

interface RecommenderSelectCollaboratorCreatedObject extends ObjectTypeBase {
}

interface RecommenderSelectCollaboratorTopElem extends XmlTopElem<RecommenderSelectCollaboratorDocument>, PersonFillingBase, CustomElemsBase {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  recommender_algorithm_id?: XmlElem<number>;
  implemented?: XmlElem<boolean>;
  selected_date?: XmlElem<Date>;
  implemented_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  base_object?: XmlElem<RecommenderSelectCollaboratorBaseObject>;
  selected_object?: XmlElem<RecommenderSelectCollaboratorSelectedObject>;
  created_object?: XmlElem<RecommenderSelectCollaboratorCreatedObject>;
}

type RecommenderSelectCollaboratorDocument = XmlDocument<RecommenderSelectCollaboratorTopElem>;
