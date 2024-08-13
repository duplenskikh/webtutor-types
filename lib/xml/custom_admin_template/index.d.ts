type CustomAdminTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase & {
  Doc: CustomAdminTemplateDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  form_name: XmlElem<string | null>;
  xms: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
};

type CustomAdminTemplateDocument = XmlDocument & {
  TopElem: CustomAdminTemplateDocumentTopElem;
  custom_admin_template: CustomAdminTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
