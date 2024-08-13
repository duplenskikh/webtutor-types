interface ForumDocumentModerator extends PersonFillingBase {
  moderator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type ForumDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
MsPersonSdBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
AdminAccessBase & {
  Doc: ForumDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Возможна подписка */
  permit_subscription: XmlElem<boolean>;
  /** Форум закрыт */
  closed: XmlElem<boolean>;
  /** Разрешить оставлять анонимные сообщения */
  allow_anonymous_message: XmlElem<boolean>;
  /** Разрешить создавать закрытие темы */
  allow_create_closed_theme: XmlElem<boolean>;
  /** Разрешить пользователям удалять свои сообщения */
  allow_user_delete: XmlElem<boolean>;
  /** Разрешить пользователям закреплять темы */
  allow_create_pinned_theme: XmlElem<boolean>;
  /** Разрешить Rich-text редактирование */
  allow_rich_text_edit: XmlElem<boolean>;
  /** Разрешить пользователям редактировать свои сообщения/темы */
  allow_edit: XmlElem<boolean>;
  /** Отображать статусы пользователей */
  disp_user_status: XmlElem<boolean>;
  /** Использовать в качестве аватара фотографию пользователя */
  disp_user_avatar: XmlElem<boolean>;
  /** Отображать аватар */
  disp_foto: XmlElem<boolean>;
  /** Каждому сообщению требуется подтверждение модератора */
  need_moder_approval: XmlElem<boolean>;
  can_attach_file: XmlElem<boolean>;
  /** Электронный курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  /** Название */
  access: XmlElem<AccessDocBase | null>;
  /** Модераторы */
  moderators: XmlMultiElem<ForumDocumentModerator | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type ForumDocument = XmlDocument & {
  TopElem: ForumDocumentTopElem;
  forum: ForumDocumentTopElem;
  DocDesc(): string;
};
