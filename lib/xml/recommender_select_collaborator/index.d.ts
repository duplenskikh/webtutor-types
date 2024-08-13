type RecommenderSelectCollaboratorDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderSelectCollaboratorDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object: XmlElem<ObjectTypeBase | null>;
  selected_object: XmlElem<ObjectTypeBase | null>;
  created_object: XmlElem<ObjectTypeBase | null>;
  implemented: XmlElem<boolean>;
  selected_date: XmlElem<Date | null>;
  implemented_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RecommenderSelectCollaboratorDocument = XmlDocument & {
  TopElem: RecommenderSelectCollaboratorDocumentTopElem;
  recommender_select_collaborator: RecommenderSelectCollaboratorDocumentTopElem;
};
