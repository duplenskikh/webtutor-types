interface ChatDocumentCollaborator {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  login: XmlElem<string>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  person_org_name: XmlElem<string>;
  confirmed: XmlElem<boolean>;
  prohibited: XmlElem<boolean>;
  last_view_date: XmlElem<Date>;
}

interface ChatDocumentUser {
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  login: XmlElem<string>;
  fullname: XmlElem<string>;
  position_name: XmlElem<string>;
  subdivision_name: XmlElem<string>;
  org_name: XmlElem<string>;
  email: XmlElem<string>;
}

interface ChatDocumentMessage {
  class: XmlElem<unknown>;
  id: XmlElem<number>;
  date: XmlElem<Date>;
  login: XmlElem<string>;
  sender_is_manager: XmlElem<boolean>;
  sender_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_private: XmlElem<boolean>;
  fullname: XmlElem<string>;
  recipient_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  recipient_fullname: XmlElem<string>;
  recipient_login: XmlElem<string>;
  time: XmlElem<string>;
  text: XmlElem<string>;
  show: XmlElem<boolean>;
  marked: XmlElem<boolean>;
  important: XmlElem<boolean>;
  answered: XmlElem<boolean>;
  comment: XmlElem<string>;
}

type ChatDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: ChatDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  collaborators: XmlMultiElem<ChatDocumentCollaborator>;
  users: XmlMultiElem<ChatDocumentUser>;
  messages: XmlMultiElem<ChatDocumentMessage>;
  is_personal: XmlElem<boolean>;
  is_multiplayer: XmlElem<boolean>;
  max_messages: XmlElem<number>;
  view_messages: XmlElem<number>;
  reload_timeout: XmlElem<number>;
  document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  conversation_id: XmlElem<number, ConversationCatalogDocumentTopElem>;
  name_source: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ChatDocument = XmlDocument & {
  TopElem: ChatDocumentTopElem;
  chat: ChatDocumentTopElem;
  DocDesc(): string;
};
