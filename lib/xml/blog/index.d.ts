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
  /** Дата */
  create_date: XmlElem<Date | null>;
  type: XmlElem<string, typeof common.blog_types>;
  channel_provider_id: XmlElem<number | null, ChannelProviderCatalogDocumentTopElem>;
  /** Возможна подписка */
  permit_subscription: XmlElem<boolean>;
  /** Разрешить оставлять анонимные комментарии */
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Имя объекта */
  object_name: XmlElem<string | null>;
  /** Авторы */
  authors: XmlMultiElem<BlogDocumentAuthor | null>;
  /** Количество авторов */
  authors_num(): number;
  /** Количество сообщений на странице */
  num_message_in_list: XmlElem<number | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  creator_full_info(): string;
};

type BlogDocument = XmlDocument & {
  TopElem: BlogDocumentTopElem;
  blog: BlogDocumentTopElem;
  DocDesc(): string;
};
