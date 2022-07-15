interface CustomAdminTemplateView {
  selector?: XmlElem<string>;
  form_name_correct?: XmlElem<boolean>;
}

interface CustomAdminTemplateTopElem extends XmlTopElem<CustomAdminTemplateDocument>, ExecCodeBase, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  form_name?: XmlElem<string>;
  xms?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  converter?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  view?: XmlElem<CustomAdminTemplateView>;
}

type CustomAdminTemplateDocument = XmlDocument<CustomAdminTemplateTopElem>;
