type CustomAdminTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase & {
  Doc: CustomAdminTemplateDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  form_name: XmlElem<string>;
  xms: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
};

type CustomAdminTemplateDocument = XmlDocument & {
  TopElem: CustomAdminTemplateDocumentTopElem;
  custom_admin_template: CustomAdminTemplateDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
