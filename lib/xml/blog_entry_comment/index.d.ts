type BlogEntryCommentDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: BlogEntryCommentDocument;
  id: XmlElem<number | null>;
  create_date: XmlElem<Date | null>;
  blog_entry_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, BlogEntryCommentCatalogDocumentTopElem>;
  like_id: XmlElem<number | null, LikeCatalogDocumentTopElem>;
  message: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  type: XmlElem<string | null>;
  creator_name(): string;
};

type BlogEntryCommentDocument = XmlDocument & {
  TopElem: BlogEntryCommentDocumentTopElem;
  blog_entry_comment: BlogEntryCommentDocumentTopElem;
  DocDesc(): string;
};
