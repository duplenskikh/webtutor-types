interface ConversationTypeDocumentDispRole {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
}

interface ConversationTypeDocumentCustomState {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

type ConversationTypeDocumentTopElem = XmlTopElem & { Doc: ConversationTypeDocument } & 
FuncManagersBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  visible_type_id?: XmlElem<string>;
  disp_roles?: XmlMultiElem<ConversationTypeDocumentDispRole>;
  custom_states?: XmlMultiElem<ConversationTypeDocumentCustomState>;
  open_script?: XmlElem<string>;
  additional_info_script?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ConversationTypeDocument = XmlDocument & { TopElem: ConversationTypeDocumentTopElem; };
