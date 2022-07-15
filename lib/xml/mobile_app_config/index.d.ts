interface MobileAppConfigDocumentSubchildrenSubchild {
  id?: XmlElem<number>;
  included?: XmlElem<boolean>;
  cf?: XmlElem<number>;
}

interface MobileAppConfigDocumentSubchildren {
  subchild?: XmlMultiElem<undefined>;
  subchild?: XmlElem<MobileAppConfigDocumentSubchildrenSubchild>;
}

interface MobileAppConfigDocument {
  id?: XmlElem<number>;
  is_default?: XmlElem<boolean>;
  is_menu?: XmlElem<boolean>;
  partial?: XmlElem<boolean>;
  cf?: XmlElem<number>;
  hidden?: XmlElem<boolean>;
  subchildren?: XmlElem<MobileAppConfigDocumentSubchildren>;
}

interface MobileAppConfigObject extends ObjectInnerBase {
}

interface MobileAppConfigVirtobj extends ObjectInnerBase {
}

interface MobileAppConfigInfoDoc {
  id?: XmlElem<number>;
}

interface MobileAppConfigHtmlInjection {
  zone?: XmlElem<string>;
  html?: XmlElem<string>;
}

interface MobileAppConfigMenu {
  search_on?: XmlElem<boolean>;
  favorites_on?: XmlElem<boolean>;
}

interface MobileAppConfigDisplayFineTuning {
  bottom_bar_headers?: XmlElem<boolean>;
}

interface MobileAppConfigCustom {
  css_template?: XmlElem<number>;
  js_template?: XmlElem<number>;
  logo?: XmlElem<number>;
}

interface MobileAppConfigScheduleSettings {
  can_create_project_task?: XmlElem<boolean>;
  can_create_task?: XmlElem<boolean>;
  can_create_sub_task?: XmlElem<boolean>;
  can_edit_boss_task?: XmlElem<boolean>;
  can_edit_task?: XmlElem<boolean>;
  can_edit_sub_task?: XmlElem<boolean>;
  can_edit_schedule?: XmlElem<boolean>;
  can_edit_sub_schedule?: XmlElem<boolean>;
  can_create_weekend_schedule?: XmlElem<boolean>;
  can_edit_with_interval?: XmlElem<boolean>;
}

interface MobileAppConfigMessagingConfigElem {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  data?: XmlElem<Binary>;
}

interface MobileAppConfigMessagingConfig {
  elem?: XmlMultiElem<undefined>;
  elem?: XmlElem<MobileAppConfigMessagingConfigElem>;
}

interface MobileAppConfigMessaging {
  engine?: XmlElem<number>;
  config?: XmlElem<MobileAppConfigMessagingConfig>;
}

interface MobileAppConfigViewTemplistblockTemplistItemField {
  id?: XmlElem<string>;
  val?: XmlElem<string>;
}

interface MobileAppConfigViewTemplistblockTemplistItem {
  field?: XmlMultiElem<undefined>;
  field?: XmlElem<MobileAppConfigViewTemplistblockTemplistItemField>;
}

interface MobileAppConfigViewTemplistblockTemplist {
  item?: XmlMultiElem<undefined>;
  item?: XmlElem<MobileAppConfigViewTemplistblockTemplistItem>;
}

interface MobileAppConfigViewTemplistblock {
  id?: XmlElem<string>;
  templist?: XmlElem<MobileAppConfigViewTemplistblockTemplist>;
}

interface MobileAppConfigViewJoinedObjectsSelectorItem {
  uid?: XmlElem<number>;
  real_id?: XmlElem<number>;
  target?: XmlElem<string>;
  targetName?: XmlElem<string>;
  title?: XmlElem<string>;
}

interface MobileAppConfigViewJoinedObjectsSelector {
  item?: XmlMultiElem<undefined>;
  item?: XmlElem<MobileAppConfigViewJoinedObjectsSelectorItem>;
}

interface MobileAppConfigView {
  selector?: XmlElem<string>;
  show_messaging?: XmlElem<boolean>;
  object_to_select?: XmlElem<string>;
  target_list?: XmlElem<boolean>;
  templistblocks?: XmlMultiElem<MobileAppConfigViewTemplistblock>;
  joined_objects_selector?: XmlElem<MobileAppConfigViewJoinedObjectsSelector>;
  templist2json?(): any;
  fill_data_for_selector?(): any;
}

interface MobileAppConfigTopElem extends XmlTopElem<MobileAppConfigDocument>, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  display_mode?: XmlElem<number>;
  show_header?: XmlElem<boolean>;
  use_update_stamp?: XmlElem<boolean>;
  use_offline_scorm?: XmlElem<boolean>;
  display_scorm_in_menu?: XmlElem<boolean>;
  login_question?: XmlElem<string>;
  days_credentials_update?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  documents?: XmlMultiElem<MobileAppConfigDocument>;
  objects?: XmlMultiElem<MobileAppConfigObject>;
  virtobjs?: XmlMultiElem<MobileAppConfigVirtobj>;
  info_docs?: XmlMultiElem<MobileAppConfigInfoDoc>;
  html_injections?: XmlMultiElem<MobileAppConfigHtmlInjection>;
  menu?: XmlElem<MobileAppConfigMenu>;
  display_fine_tuning?: XmlElem<MobileAppConfigDisplayFineTuning>;
  custom?: XmlElem<MobileAppConfigCustom>;
  schedule_settings?: XmlElem<MobileAppConfigScheduleSettings>;
  messaging?: XmlElem<MobileAppConfigMessaging>;
  view?: XmlElem<MobileAppConfigView>;
  access?: XmlElem<AccessDocBase>;
}

type MobileAppConfigDocument = XmlDocument<MobileAppConfigTopElem>;
