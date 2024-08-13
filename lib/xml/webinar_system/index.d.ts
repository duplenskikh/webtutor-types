interface WebinarSystemDocumentWebinarSystemFieldEntry {
  value: XmlElem<string | null>;
}

interface WebinarSystemDocumentWebinarSystemField {
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.template_field_types>;
  catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  tooltip: XmlElem<string | null>;
  xquery_qual: XmlElem<string | null>;
  entries: XmlMultiElem<WebinarSystemDocumentWebinarSystemFieldEntry | null>;
}

type WebinarSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: WebinarSystemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
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
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
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
