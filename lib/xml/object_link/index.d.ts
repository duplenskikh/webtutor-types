interface ObjectLinkDocumentLink extends ObjectTypeBase {
  id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
}

type ObjectLinkDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: ObjectLinkDocument;
  id: XmlElem<number | null>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  links: XmlMultiElem<ObjectLinkDocumentLink | null>;
  calc_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectLinkDocument = XmlDocument & {
  TopElem: ObjectLinkDocumentTopElem;
  object_link: ObjectLinkDocumentTopElem;
};
