interface BlogDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_full_moderator: XmlElem<boolean>;
}

type BlogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase &
PersonFillingBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: BlogDocument;
  create_date: XmlElem<Date>;
  type: XmlElem<string, typeof common.blog_types>;
  channel_provider_id: XmlElem<number, ChannelProviderCatalogDocumentTopElem>;
  permit_subscription: XmlElem<boolean>;
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  authors: XmlMultiElem<BlogDocumentAuthor>;
  authors_num(): unknown;
  num_message_in_list: XmlElem<number>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  creator_full_info(): unknown;
};

type BlogDocument = XmlDocument & {
  TopElem: BlogDocumentTopElem;
};
