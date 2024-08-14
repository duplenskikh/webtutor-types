type CustomAdminTemplateDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase & {
  Doc: CustomAdminTemplateDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Категория */
  category: XmlElem<string | null>;
  /** Название формы */
  form_name: XmlElem<string | null>;
  /** Код */
  xms: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type CustomAdminTemplateDocument = XmlDocument & {
  TopElem: CustomAdminTemplateDocumentTopElem;
  custom_admin_template: CustomAdminTemplateDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
