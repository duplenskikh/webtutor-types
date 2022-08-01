type RecommenderSelectCollaboratorDocumentTopElem = XmlTopElem & { Doc: RecommenderSelectCollaboratorDocument } & 
PersonFillingBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  recommender_algorithm_id?: XmlElem<number>;
  base_object?: XmlElem<ObjectTypeBase>;
  selected_object?: XmlElem<ObjectTypeBase>;
  created_object?: XmlElem<ObjectTypeBase>;
  implemented?: XmlElem<boolean>;
  selected_date?: XmlElem<Date>;
  implemented_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RecommenderSelectCollaboratorDocument = XmlDocument & { TopElem: RecommenderSelectCollaboratorDocumentTopElem; };
