type BlogEntryCommentDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: BlogEntryCommentDocument;
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  blog_entry_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, BlogEntryCommentCatalogDocumentTopElem>;
  like_id: XmlElem<number, LikeCatalogDocumentTopElem>;
  message: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  type: XmlElem<string>;
  creator_name(): unknown;
};

type BlogEntryCommentDocument = XmlDocument & {
  TopElem: BlogEntryCommentDocumentTopElem;
};
