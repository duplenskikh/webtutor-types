interface BlockMessageMessageRecipient {
  person_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
}

interface BlockMessageMessageDispRole {
  id?: XmlElem<string>;
}

interface BlockMessageMessageView {
  tab_select?: XmlElem<string>;
}

interface BlockMessageMessage extends ObjectTypeBase, FileListBase, CatalogListBase {
  id?: XmlElem<string>;
  text?: XmlElem<string>;
  type_id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  data?: XmlElem<string>;
  recipients?: XmlMultiElem<BlockMessageMessageRecipient>;
  disp_roles?: XmlMultiElem<BlockMessageMessageDispRole>;
  view?: XmlElem<BlockMessageMessageView>;
}

interface BlockMessageTopElem extends XmlTopElem<BlockMessageDocument>, ObjectTypeBase, CustomElemsBase {
  id?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  last_message_date?: XmlElem<Date>;
  state_id?: XmlElem<string>;
  all_message_read?: XmlElem<boolean>;
  count_message?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  recipient_id?: XmlMultiElem<number>;
  unread_recipient_id?: XmlMultiElem<number>;
  disp_role_id?: XmlMultiElem<string>;
  messages?: XmlMultiElem<BlockMessageMessage>;
}

type BlockMessageDocument = XmlDocument<BlockMessageTopElem>;
