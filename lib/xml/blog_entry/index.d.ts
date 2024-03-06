type BlogEntryDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
GameBonusBase &
CustomElemsBase & {
  Doc: BlogEntryDocument;
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  date_modified: XmlElem<Date>;
  allow_comment: XmlElem<boolean>;
  blocked: XmlElem<boolean>;
  text_area: XmlElem<string>;
  labels: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  blog_id: XmlElem<number, BlogCatalogDocumentTopElem>;
  feed_item_id: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  comment_num: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type BlogEntryDocument = XmlDocument & {
  TopElem: BlogEntryDocumentTopElem;
  blog_entry: BlogEntryDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
