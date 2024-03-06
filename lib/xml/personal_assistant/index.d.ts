interface PersonalAssistantDocumentChatbotsBlockChatbot {
  chatbot_id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
}

interface PersonalAssistantDocumentChatbotsBlock {
  chatbots: XmlMultiElem<PersonalAssistantDocumentChatbotsBlockChatbot>;
}

type PersonalAssistantDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: PersonalAssistantDocument;
  is_enabled: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  sex: XmlElem<string>;
  chatbots_block: XmlElem<PersonalAssistantDocumentChatbotsBlock>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type PersonalAssistantDocument = XmlDocument & {
  TopElem: PersonalAssistantDocumentTopElem;
  personal_assistant: PersonalAssistantDocumentTopElem;
  OnCreate(): unknown;
  DocDesc(): unknown;
};
