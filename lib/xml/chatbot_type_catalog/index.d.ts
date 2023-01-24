type ChatbotTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ChatbotTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  script_url: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type ChatbotTypeCatalogDocument = XmlDocument & { TopElem: ChatbotTypeCatalogDocumentTopElem; };
