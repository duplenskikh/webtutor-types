type BlogEntryDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
GameBonusBase &
CustomElemsBase & {
  Doc: BlogEntryDocument;
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  date_modified: XmlElem<Date | null>;
  allow_comment: XmlElem<boolean>;
  blocked: XmlElem<boolean>;
  text_area: XmlElem<string | null>;
  labels: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  feed_item_id: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  comment_num: XmlElem<number | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type BlogEntryDocument = XmlDocument & {
  TopElem: BlogEntryDocumentTopElem;
  blog_entry: BlogEntryDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
