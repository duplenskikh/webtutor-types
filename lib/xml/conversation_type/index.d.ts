interface ConversationTypeDispRole {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
}

interface ConversationTypeCustomState {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface ConversationTypeTopElem extends XmlTopElem<ConversationTypeDocument>, FuncManagersBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  visible_type_id?: XmlElem<string>;
  open_script?: XmlElem<string>;
  additional_info_script?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disp_roles?: XmlMultiElem<ConversationTypeDispRole>;
  custom_states?: XmlMultiElem<ConversationTypeCustomState>;
}

type ConversationTypeDocument = XmlDocument<ConversationTypeTopElem>;
