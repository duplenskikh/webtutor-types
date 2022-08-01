interface BlockMessageDocumentMessageRecipient {
  person_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
}

interface BlockMessageDocumentMessageDispRole {
  id?: XmlElem<string>;
}
interface BlockMessageDocumentMessage extends ObjectTypeBase,
  FileListBase,
  CatalogListBase {
  id?: XmlElem<string>;
  text?: XmlElem<string>;
  type_id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  recipients?: XmlMultiElem<BlockMessageDocumentMessageRecipient>;
  disp_roles?: XmlMultiElem<BlockMessageDocumentMessageDispRole>;
  data?: XmlElem<string>;
}

type BlockMessageDocumentTopElem = XmlTopElem & { Doc: BlockMessageDocument } & 
ObjectTypeBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  last_message_date?: XmlElem<Date>;
  state_id?: XmlElem<string>;
  all_message_read?: XmlElem<boolean>;
  count_message?: XmlElem<number>;
  messages?: XmlMultiElem<BlockMessageDocumentMessage>;
  recipient_id?: XmlMultiElem<number>;
  unread_recipient_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  disp_role_id?: XmlMultiElem<string>;
}

type BlockMessageDocument = XmlDocument & { TopElem: BlockMessageDocumentTopElem; };
