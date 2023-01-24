type BlogEntryCommentCatalogDocumentTopElem = XmlTopElem & { Doc: BlogEntryCommentCatalogDocument } & {
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  blog_entry_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  creator_name: XmlElem<string>;
  message: XmlElem<string>;
  parent_id: XmlElem<number>;
  like_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BlogEntryCommentCatalogDocument = XmlDocument & { TopElem: BlogEntryCommentCatalogDocumentTopElem; };
