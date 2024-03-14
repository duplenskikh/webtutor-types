type SocialEntryCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  create_date: XmlElem<Date>;
  parent_id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  like_id: XmlElem<number, LikeCatalogDocumentTopElem>;
  OnBuild(): unknown;
  MatchDocType(): unknown;
};
