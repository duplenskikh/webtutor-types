interface ChatbotTypeView extends DescBase {
}

interface ChatbotTypeTopElem extends XmlTopElem<ChatbotTypeDocument>, MsParametersBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  script_url?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  view?: XmlElem<ChatbotTypeView>;
}

type ChatbotTypeDocument = XmlDocument<ChatbotTypeTopElem>;
