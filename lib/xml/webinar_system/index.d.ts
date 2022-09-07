type WebinarSystemDocumentTopElem = XmlTopElem & { Doc: WebinarSystemDocument } & 
AdminAccessBase &
WebVariablesBase & {
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
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  get_setting?(): unknown;
  get_settings?(): unknown;
}

type WebinarSystemDocument = XmlDocument & {
  TopElem: WebinarSystemDocumentTopElem;
};
