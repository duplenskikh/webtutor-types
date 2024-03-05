type BlockMessageCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number>;
  create_date: XmlElem<Date>;
  last_message_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.block_message_states>;
  all_message_read: XmlElem<boolean>;
  count_message: XmlElem<number>;
  disabled_data: XmlElem<boolean>;
  has_link: XmlElem<boolean>;
  has_file: XmlElem<boolean>;
  recipient_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  unread_recipient_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  disp_role_id: XmlMultiElemObject<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
