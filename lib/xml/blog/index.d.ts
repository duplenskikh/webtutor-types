interface BlogDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_full_moderator: XmlElem<boolean | null>;
}

type BlogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
PersonFillingBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BlogDocument;
  create_date: XmlElem<Date | null>;
  type: XmlElem<string, typeof common.blog_types>;
  channel_provider_id: XmlElem<number | null, ChannelProviderCatalogDocumentTopElem>;
  permit_subscription: XmlElem<boolean>;
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  authors: XmlMultiElem<BlogDocumentAuthor | null>;
  authors_num(): number;
  num_message_in_list: XmlElem<number | null>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  creator_full_info(): string;
};

type BlogDocument = XmlDocument & {
  TopElem: BlogDocumentTopElem;
  blog: BlogDocumentTopElem;
  DocDesc(): string;
};
