interface WebinarSystemDocumentWebinarSystemFieldEntry {
  value: XmlElem<string>;
}

interface WebinarSystemDocumentWebinarSystemField {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  title: XmlElem<string>;
  tooltip: XmlElem<string>;
  xquery_qual: XmlElem<string>;
  entries: XmlMultiElem<WebinarSystemDocumentWebinarSystemFieldEntry>;
}

type WebinarSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase &
WebVariablesBase & {
  Doc: WebinarSystemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  library_code: XmlElem<string>;
  admin_code_url: XmlElem<string>;
  admin_code: XmlElem<string>;
  web_code_url: XmlElem<string>;
  web_code: XmlElem<string>;
  web_edit_code_url: XmlElem<string>;
  web_edit_code: XmlElem<string>;
  web_save_code_url: XmlElem<string>;
  web_save_code: XmlElem<string>;
  webinar_system_fields: XmlMultiElem<WebinarSystemDocumentWebinarSystemField>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting(sSettingNameParam: string): unknown;
  get_settings(): unknown;
};

type WebinarSystemDocument = XmlDocument & {
  TopElem: WebinarSystemDocumentTopElem;
};
