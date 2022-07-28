type CustomAdminTemplateDocumentTopElem = XmlTopElem & { Doc: CustomAdminTemplateDocument } & 
  ExecCodeBase &
  WebVariablesBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  form_name?: XmlElem<string>;
  xms?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
}

type CustomAdminTemplateDocument = XmlDocument & { TopElem: CustomAdminTemplateDocumentTopElem; };
