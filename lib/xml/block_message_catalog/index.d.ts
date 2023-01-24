type BlockMessageCatalogDocumentTopElem = XmlTopElem & { Doc: BlockMessageCatalogDocument } & 
ObjectTypeBase & {
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  last_message_date: XmlElem<Date>;
  state_id: XmlElem<string>;
  all_message_read: XmlElem<boolean>;
  count_message: XmlElem<number>;
  recipient_id: XmlMultiElem<number>;
  unread_recipient_id: XmlMultiElem<number>;
  disp_role_id: XmlMultiElem<string>;
}

type BlockMessageCatalogDocument = XmlDocument & { TopElem: BlockMessageCatalogDocumentTopElem; };
