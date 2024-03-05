interface ObjectLinkDocumentLink extends ObjectTypeBase {
  id: XmlElem<string>;
  comment: XmlElem<string>;
}

type ObjectLinkDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: ObjectLinkDocument;
  id: XmlElem<number>;
  recommender_algorithm_id: XmlElem<number, RecommenderAlgorithmCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  links: XmlMultiElem<ObjectLinkDocumentLink>;
  calc_date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ObjectLinkDocument = XmlDocument & {
  TopElem: ObjectLinkDocumentTopElem;
};
