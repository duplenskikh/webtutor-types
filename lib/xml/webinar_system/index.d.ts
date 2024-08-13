interface WebinarSystemDocumentWebinarSystemFieldEntry {
  /** Значение */
  value: XmlElem<string | null>;
}

interface WebinarSystemDocumentWebinarSystemField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  tooltip: XmlElem<string | null>;
  xquery_qual: XmlElem<string | null>;
  /** Список допустимых значений */
  entries: XmlMultiElem<WebinarSystemDocumentWebinarSystemFieldEntry | null>;
}

type WebinarSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: WebinarSystemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  library_code: XmlElem<string | null>;
  admin_code_url: XmlElem<string | null>;
  admin_code: XmlElem<string | null>;
  web_code_url: XmlElem<string | null>;
  web_code: XmlElem<string | null>;
  web_edit_code_url: XmlElem<string | null>;
  web_edit_code: XmlElem<string | null>;
  web_save_code_url: XmlElem<string | null>;
  web_save_code: XmlElem<string | null>;
  webinar_system_fields: XmlMultiElem<WebinarSystemDocumentWebinarSystemField | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  get_setting(settingName: string): string;
  get_settings(): Object;
};

type WebinarSystemDocument = XmlDocument & {
  TopElem: WebinarSystemDocumentTopElem;
  webinar_system: WebinarSystemDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};
