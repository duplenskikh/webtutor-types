type BlogEntryCommentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  blog_entry_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  creator_name: XmlElem<string>;
  message: XmlElem<string>;
  parent_id: XmlElem<number, BlogEntryCommentCatalogDocumentTopElem>;
  like_id: XmlElem<number, LikeCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
