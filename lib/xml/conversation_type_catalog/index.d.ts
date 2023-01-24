type ConversationTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ConversationTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  visible_type_id: XmlElem<string>;
  use_open_script: XmlElem<boolean>;
  use_additional_info_script: XmlElem<boolean>;
}

type ConversationTypeCatalogDocument = XmlDocument & { TopElem: ConversationTypeCatalogDocumentTopElem; };
