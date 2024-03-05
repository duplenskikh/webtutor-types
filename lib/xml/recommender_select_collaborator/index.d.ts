type RecommenderSelectCollaboratorDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase & {
  Doc: RecommenderSelectCollaboratorDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
  base_object: XmlElem<ObjectTypeBase>;
  selected_object: XmlElem<ObjectTypeBase>;
  created_object: XmlElem<ObjectTypeBase>;
  implemented: XmlElem<boolean>;
  selected_date: XmlElem<Date>;
  implemented_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RecommenderSelectCollaboratorDocument = XmlDocument & {
  TopElem: RecommenderSelectCollaboratorDocumentTopElem;
};
