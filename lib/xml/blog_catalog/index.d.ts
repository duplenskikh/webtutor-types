type BlogCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.blog_types>;
  channel_provider_id: XmlElem<number | null, ChannelProviderCatalogDocumentTopElem>;
  permit_subscription: XmlElem<boolean>;
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  creator_full_info: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  authors_num: XmlElem<number | null>;
  authors: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
