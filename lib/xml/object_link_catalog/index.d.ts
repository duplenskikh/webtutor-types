type ObjectLinkCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectLinkCatalogDocument } & 
ObjectTypeBase & {
  id: XmlElem<number>;
  recommender_algorithm_id: XmlElem<number>;
  state_id: XmlElem<string>;
  calc_date: XmlElem<Date>;
}

type ObjectLinkCatalogDocument = XmlDocument & { TopElem: ObjectLinkCatalogDocumentTopElem; };
