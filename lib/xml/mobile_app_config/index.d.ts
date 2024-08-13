interface ObjectInnerBaseSettingsAuxAuxParam {
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  tag: XmlElem<string | null>;
}

interface ObjectInnerBaseSettingsAux {
  aux_param: XmlElem<ObjectInnerBaseSettingsAuxAuxParam | null>;
}

interface ObjectInnerBaseSettings extends WebVariablesBase {
  aux: XmlElem<ObjectInnerBaseSettingsAux | null>;
}

interface ObjectInnerBase {
  id: XmlElem<number | null>;
  catalog: XmlElem<string | null>;
  uid: XmlElem<number | null>;
  title: XmlElem<string | null>;
  parent_section_id: XmlElem<number | null>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  is_offline: XmlElem<boolean>;
  hidden: XmlElem<boolean>;
  settings: XmlElem<ObjectInnerBaseSettings | null>;
}

interface MobileAppConfigDocumentMenu {
  search_on: XmlElem<boolean>;
  favorites_on: XmlElem<boolean>;
}

interface MobileAppConfigDocumentDocumentSubchild {
  id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  included: XmlElem<boolean | null>;
  cf: XmlElem<number>;
}

interface MobileAppConfigDocumentDocument {
  id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  partial: XmlElem<boolean>;
  cf: XmlElem<number>;
  hidden: XmlElem<boolean>;
  subchildren: XmlMultiElem<MobileAppConfigDocumentDocumentSubchild | null>;
}

interface MobileAppConfigDocumentInfoDoc {
  id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
}

interface MobileAppConfigDocumentDisplayFineTuning {
  bottom_bar_headers: XmlElem<boolean>;
}

interface MobileAppConfigDocumentHtmlInjection {
  zone: XmlElem<string | null>;
  html: XmlElem<string | null>;
}

interface MobileAppConfigDocumentCustom {
  css_template: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  js_template: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  logo: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
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
  id: XmlElem<string | null>;
  value: XmlElem<string | null>;
  data: XmlElem<Binary | null>;
}

interface MobileAppConfigDocumentMessagingConfig {
  elem: XmlElem<MobileAppConfigDocumentMessagingConfigElem | null>;
}

interface MobileAppConfigDocumentMessaging {
  engine: XmlElem<number>;
  config: XmlElem<MobileAppConfigDocumentMessagingConfig | null>;
}

type MobileAppConfigDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: MobileAppConfigDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string>;
  typeSet(key: unknown, yes: unknown): unknown;
  menu: XmlElem<MobileAppConfigDocumentMenu | null>;
  documents: XmlMultiElem<MobileAppConfigDocumentDocument | null>;
  objects: XmlMultiElem<ObjectInnerBase | null>;
  virtobjs: XmlMultiElem<ObjectInnerBase | null>;
  info_docs: XmlMultiElem<MobileAppConfigDocumentInfoDoc | null>;
  display_mode: XmlElem<number>;
  display_fine_tuning: XmlElem<MobileAppConfigDocumentDisplayFineTuning | null>;
  html_injections: XmlMultiElem<MobileAppConfigDocumentHtmlInjection | null>;
  show_header: XmlElem<boolean>;
  use_update_stamp: XmlElem<boolean>;
  use_offline_scorm: XmlElem<boolean>;
  display_scorm_in_menu: XmlElem<boolean>;
  use_chat: XmlElem<boolean>;
  login_question: XmlElem<string | null>;
  days_credentials_update: XmlElem<number | null>;
  custom: XmlElem<MobileAppConfigDocumentCustom | null>;
  schedule_settings: XmlElem<MobileAppConfigDocumentScheduleSettings | null>;
  messaging: XmlElem<MobileAppConfigDocumentMessaging | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  show_messaging: XmlElem<boolean>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type MobileAppConfigDocument = XmlDocument & {
  TopElem: MobileAppConfigDocumentTopElem;
  mobile_app_config: MobileAppConfigDocumentTopElem;
  DocDesc(): string;
};
