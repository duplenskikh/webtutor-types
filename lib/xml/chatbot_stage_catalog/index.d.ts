type ChatbotStageCatalogDocumentTopElem = XmlTopElem & { Doc: ChatbotStageCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  chatbot_id: XmlElem<number>;
  action_type: XmlElem<string>;
  keyboard_type: XmlElem<string>;
}

type ChatbotStageCatalogDocument = XmlDocument & { TopElem: ChatbotStageCatalogDocumentTopElem; };
