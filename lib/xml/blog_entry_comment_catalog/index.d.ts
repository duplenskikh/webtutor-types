type BlogEntryCommentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  create_date: XmlElem<Date | null>;
  blog_entry_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  creator_name: XmlElem<string | null>;
  message: XmlElem<string | null>;
  parent_id: XmlElem<number | null, BlogEntryCommentCatalogDocumentTopElem>;
  like_id: XmlElem<number | null, LikeCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
