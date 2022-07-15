interface WebinarSystemView extends DescBase {
}

interface WebinarSystemTopElem extends XmlTopElem<WebinarSystemDocument>, MsParametersBase, AdminAccessBase, WebVariablesBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  library_url?: XmlElem<string>;
  library_code?: XmlElem<string>;
  admin_code_url?: XmlElem<string>;
  admin_code?: XmlElem<string>;
  web_code_url?: XmlElem<string>;
  web_code?: XmlElem<string>;
  web_edit_code_url?: XmlElem<string>;
  web_edit_code?: XmlElem<string>;
  web_save_code_url?: XmlElem<string>;
  web_save_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<WebinarSystemView>;
  get_setting?(): any;
  get_settings?(): any;
}

type WebinarSystemDocument = XmlDocument<WebinarSystemTopElem>;
