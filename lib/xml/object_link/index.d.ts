interface ObjectLinkDocumentLink extends ObjectTypeBase {
  id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

type ObjectLinkDocumentTopElem = XmlTopElem & { Doc: ObjectLinkDocument } & 
ObjectTypeBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  recommender_algorithm_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  links?: XmlMultiElem<ObjectLinkDocumentLink>;
  calc_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ObjectLinkDocument = XmlDocument & { TopElem: ObjectLinkDocumentTopElem; };
