interface ObjectInnerBaseSettingsAuxAuxParam {
  id: XmlElem<string>;
  value: XmlElem<string>;
  tag: XmlElem<string>;
}

interface ObjectInnerBaseSettingsAux {
  aux_param: XmlElem<ObjectInnerBaseSettingsAuxAuxParam>;
}

interface ObjectInnerBaseSettings extends WebVariablesBase {
  aux: XmlElem<ObjectInnerBaseSettingsAux>;
}

interface ObjectInnerBase {
  id: XmlElem<number>;
  catalog: XmlElem<string>;
  uid: XmlElem<number>;
  title: XmlElem<string>;
  parent_section_id: XmlElem<number>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  is_offline: XmlElem<boolean>;
  hidden: XmlElem<boolean>;
  settings: XmlElem<ObjectInnerBaseSettings>;
}

interface MobileAppConfigDocumentMenu {
  search_on: XmlElem<boolean>;
  favorites_on: XmlElem<boolean>;
}

interface MobileAppConfigDocumentDocumentSubchild {
  id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  included: XmlElem<boolean>;
  cf: XmlElem<number>;
}

interface MobileAppConfigDocumentDocument {
  id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  partial: XmlElem<boolean>;
  cf: XmlElem<number>;
  hidden: XmlElem<boolean>;
  subchildren: XmlMultiElem<MobileAppConfigDocumentDocumentSubchild>;
}

interface MobileAppConfigDocumentInfoDoc {
  id: XmlElem<number, DocumentCatalogDocumentTopElem>;
}

interface MobileAppConfigDocumentDisplayFineTuning {
  bottom_bar_headers: XmlElem<boolean>;
}

interface MobileAppConfigDocumentHtmlInjection {
  zone: XmlElem<string>;
  html: XmlElem<string>;
}

interface MobileAppConfigDocumentCustom {
  css_template: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  js_template: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  logo: XmlElem<number, ResourceCatalogDocumentTopElem>;
}

interface MobileAppConfigDocumentScheduleSettings {
  can_create_project_task: XmlElem<boolean>;
  can_create_task: XmlElem<boolean>;
  can_create_sub_task: XmlElem<boolean>;
  can_edit_boss_task: XmlElem<boolean>;
  can_edit_task: XmlElem<boolean>;
  can_edit_sub_task: XmlElem<boolean>;
  can_edit_schedule: XmlElem<boolean>;
  can_edit_sub_schedule: XmlElem<boolean>;
  can_create_weekend_schedule: XmlElem<boolean>;
  can_edit_with_interval: XmlElem<boolean>;
}

interface MobileAppConfigDocumentMessagingConfigElem {
  id: XmlElem<string>;
  value: XmlElem<string>;
  data: XmlElem<Binary>;
}

interface MobileAppConfigDocumentMessagingConfig {
  elem: XmlElem<MobileAppConfigDocumentMessagingConfigElem>;
}

interface MobileAppConfigDocumentMessaging {
  engine: XmlElem<number>;
  config: XmlElem<MobileAppConfigDocumentMessagingConfig>;
}

type MobileAppConfigDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: MobileAppConfigDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  typeSet(key: unknown, yes: unknown): unknown;
  menu: XmlElem<MobileAppConfigDocumentMenu>;
  documents: XmlMultiElem<MobileAppConfigDocumentDocument>;
  objects: XmlMultiElem<ObjectInnerBase>;
  virtobjs: XmlMultiElem<ObjectInnerBase>;
  info_docs: XmlMultiElem<MobileAppConfigDocumentInfoDoc>;
  display_mode: XmlElem<number>;
  display_fine_tuning: XmlElem<MobileAppConfigDocumentDisplayFineTuning>;
  html_injections: XmlMultiElem<MobileAppConfigDocumentHtmlInjection>;
  show_header: XmlElem<boolean>;
  use_update_stamp: XmlElem<boolean>;
  use_offline_scorm: XmlElem<boolean>;
  display_scorm_in_menu: XmlElem<boolean>;
  use_chat: XmlElem<boolean>;
  login_question: XmlElem<string>;
  days_credentials_update: XmlElem<number>;
  custom: XmlElem<MobileAppConfigDocumentCustom>;
  schedule_settings: XmlElem<MobileAppConfigDocumentScheduleSettings>;
  messaging: XmlElem<MobileAppConfigDocumentMessaging>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  show_messaging: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
};

type MobileAppConfigDocument = XmlDocument & {
  TopElem: MobileAppConfigDocumentTopElem;
  mobile_app_config: MobileAppConfigDocumentTopElem;
  DocDesc(): string;
};
