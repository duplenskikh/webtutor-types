type RecommenderSelectCollaboratorCatalogDocumentTopElem = XmlTopElem & { Doc: RecommenderSelectCollaboratorCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  recommender_algorithm_id: XmlElem<number>;
  base_object_id: XmlElem<number>;
  base_object_type: XmlElem<string>;
  base_object_name: XmlElem<string>;
  selected_object_id: XmlElem<number>;
  selected_object_type: XmlElem<string>;
  selected_object_name: XmlElem<string>;
  created_object_id: XmlElem<number>;
  created_object_type: XmlElem<string>;
  created_object_name: XmlElem<string>;
  implemented: XmlElem<boolean>;
  selected_date: XmlElem<Date>;
  implemented_date: XmlElem<Date>;
}

type RecommenderSelectCollaboratorCatalogDocument = XmlDocument & { TopElem: RecommenderSelectCollaboratorCatalogDocumentTopElem; };
