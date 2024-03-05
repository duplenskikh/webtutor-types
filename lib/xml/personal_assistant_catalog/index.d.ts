type PersonalAssistantCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  is_enabled: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  sex: XmlElem<string>;
  chatbot_ids: XmlMultiElemObject<number, ChatbotCatalogDocumentTopElem>;
  OnBuild(): unknown;
};
