interface ChatDocumentCollaborator {
  /** Пользователь */
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Логин */
  login: XmlElem<string | null>;
  /** ФИО сотрудника */
  person_fullname: XmlElem<string | null>;
  /** Должность сотрудника */
  person_position_name: XmlElem<string | null>;
  /** Подразделение сотрудника */
  person_subdivision_name: XmlElem<string | null>;
  /** Организация сотрудника */
  person_org_name: XmlElem<string | null>;
  confirmed: XmlElem<boolean>;
  prohibited: XmlElem<boolean>;
  last_view_date: XmlElem<Date | null>;
}

interface ChatDocumentUser {
  /** Пользователь */
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Логин */
  login: XmlElem<string | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  /** Должность */
  position_name: XmlElem<string | null>;
  /** Подразделение */
  subdivision_name: XmlElem<string | null>;
  /** Организация */
  org_name: XmlElem<string | null>;
  email: XmlElem<string | null>;
}

interface ChatDocumentMessage {
  class: XmlElem<unknown | null>;
  id: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Логин */
  login: XmlElem<string | null>;
  sender_is_manager: XmlElem<boolean | null>;
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_private: XmlElem<boolean | null>;
  /** ФИО */
  fullname: XmlElem<string | null>;
  recipient_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recipient_fullname: XmlElem<string | null>;
  recipient_login: XmlElem<string | null>;
  time: XmlElem<string | null>;
  /** Текст сообщения */
  text: XmlElem<string | null>;
  show: XmlElem<boolean | null>;
  marked: XmlElem<boolean | null>;
  important: XmlElem<boolean | null>;
  answered: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
}

type ChatDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ChatDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Пользователи */
  collaborators: XmlMultiElem<ChatDocumentCollaborator | null>;
  /** Пользователи */
  users: XmlMultiElem<ChatDocumentUser | null>;
  /** Сообщения */
  messages: XmlMultiElem<ChatDocumentMessage | null>;
  /** Персональный чат */
  is_personal: XmlElem<boolean>;
  is_multiplayer: XmlElem<boolean>;
  /** Максимальное количество сообщений */
  max_messages: XmlElem<number>;
  /** При открытии показывать сообщений */
  view_messages: XmlElem<number>;
  /** Время обновления */
  reload_timeout: XmlElem<number>;
  /** Документ */
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  /** Курс */
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  name_source: XmlElem<string>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ChatDocument = XmlDocument & {
  TopElem: ChatDocumentTopElem;
  chat: ChatDocumentTopElem;
  DocDesc(): string;
};
