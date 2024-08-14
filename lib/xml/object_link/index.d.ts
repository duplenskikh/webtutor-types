interface ObjectLinkDocumentLink extends ObjectTypeBase {
  id: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
}

type ObjectLinkDocumentTopElem = XmlTopElem &
ObjectTypeBase &
CustomElemsBase & {
  Doc: ObjectLinkDocument;
  id: XmlElem<number | null>;
  recommender_algorithm_id: XmlElem<number | null, RecommenderAlgorithmCatalogDocumentTopElem>;
  /** Состояние */
  state_id: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  /** Объект */
  links: XmlMultiElem<ObjectLinkDocumentLink | null>;
  calc_date: XmlElem<Date | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectLinkDocument = XmlDocument & {
  TopElem: ObjectLinkDocumentTopElem;
  object_link: ObjectLinkDocumentTopElem;
};
