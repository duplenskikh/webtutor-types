interface ChatDocumentCollaborator {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  login: XmlElem<string | null>;
  person_fullname: XmlElem<string | null>;
  person_position_name: XmlElem<string | null>;
  person_subdivision_name: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  confirmed: XmlElem<boolean>;
  prohibited: XmlElem<boolean>;
  last_view_date: XmlElem<Date | null>;
}

interface ChatDocumentUser {
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  login: XmlElem<string | null>;
  fullname: XmlElem<string | null>;
  position_name: XmlElem<string | null>;
  subdivision_name: XmlElem<string | null>;
  org_name: XmlElem<string | null>;
  email: XmlElem<string | null>;
}

interface ChatDocumentMessage {
  class: XmlElem<unknown | null>;
  id: XmlElem<number | null>;
  date: XmlElem<Date | null>;
  login: XmlElem<string | null>;
  sender_is_manager: XmlElem<boolean | null>;
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_private: XmlElem<boolean | null>;
  fullname: XmlElem<string | null>;
  recipient_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recipient_fullname: XmlElem<string | null>;
  recipient_login: XmlElem<string | null>;
  time: XmlElem<string | null>;
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
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  collaborators: XmlMultiElem<ChatDocumentCollaborator | null>;
  users: XmlMultiElem<ChatDocumentUser | null>;
  messages: XmlMultiElem<ChatDocumentMessage | null>;
  is_personal: XmlElem<boolean>;
  is_multiplayer: XmlElem<boolean>;
  max_messages: XmlElem<number>;
  view_messages: XmlElem<number>;
  reload_timeout: XmlElem<number>;
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  conversation_id: XmlElem<number | null, ConversationCatalogDocumentTopElem>;
  name_source: XmlElem<string>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ChatDocument = XmlDocument & {
  TopElem: ChatDocumentTopElem;
  chat: ChatDocumentTopElem;
  DocDesc(): string;
};
