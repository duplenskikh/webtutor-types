interface ObjectInnerBaseSettingsAuxAuxParam {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  tag?: XmlElem<string>;
}

interface ObjectInnerBaseSettingsAux {
  aux_param?: XmlElem<ObjectInnerBaseSettingsAuxAuxParam>;
}

interface ObjectInnerBaseSettings extends WebVariablesBase {
  aux?: XmlElem<ObjectInnerBaseSettingsAux>;
}

interface ObjectInnerBase {
  id?: XmlElem<number>;
  catalog?: XmlElem<string>;
  uid?: XmlElem<number>;
  title?: XmlElem<string>;
  parent_section_id?: XmlElem<number>;
  is_default?: XmlElem<boolean>;
  is_menu?: XmlElem<boolean>;
  is_offline?: XmlElem<boolean>;
  hidden?: XmlElem<boolean>;
  settings?: XmlElem<ObjectInnerBaseSettings>;
}

interface MobileAppConfigDocumentDocument {
  id: XmlElem<number>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  partial: XmlElem<boolean>;
  cf: XmlElem<number>;
  hidden: XmlElem<boolean>;
}

interface MobileAppConfigDocumentInfoDoc {
  id: XmlElem<number>;
}

interface MobileAppConfigDocumentHtmlInjection {
  zone: XmlElem<string>;
  html: XmlElem<string>;
}

type MobileAppConfigDocumentTopElem = XmlTopElem & { Doc: MobileAppConfigDocument } & 
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  documents: XmlMultiElem<MobileAppConfigDocumentDocument>;
  info_docs: XmlMultiElem<MobileAppConfigDocumentInfoDoc>;
  display_mode: XmlElem<number>;
  html_injections: XmlMultiElem<MobileAppConfigDocumentHtmlInjection>;
  show_header: XmlElem<boolean>;
  use_update_stamp: XmlElem<boolean>;
  use_offline_scorm: XmlElem<boolean>;
  display_scorm_in_menu: XmlElem<boolean>;
  login_question: XmlElem<string>;
  days_credentials_update: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type MobileAppConfigDocument = XmlDocument & { TopElem: MobileAppConfigDocumentTopElem; };
