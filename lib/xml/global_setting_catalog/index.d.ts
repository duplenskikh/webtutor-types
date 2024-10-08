type GlobalSettingCatalogDocumentTopElem = XmlTopElem & {
  first_install: XmlElem<boolean>;
  branch_code: XmlElem<number | null>;
  skk_code: XmlElem<string | null>;
  old_skk_code: XmlElem<string | null>;
  smtp_server: XmlElem<string | null>;
  default_exchange_server_id: XmlElem<number | null, ExchangeServerCatalogDocumentTopElem>;
  settings: XmlElem<GlobalSettingsBase | null>;
  interface_mode: XmlElem<string>;
  disp_pers: XmlElem<boolean>;
  disp_pers_settings: XmlElem<boolean>;
  disp_sub: XmlElem<boolean>;
  disp_outstaff: XmlElem<boolean>;
  disp_comp_ben: XmlElem<boolean>;
  disp_comp_ben_settings: XmlElem<boolean>;
  disp_dist: XmlElem<boolean>;
  disp_dist_settings: XmlElem<boolean>;
  disp_test: XmlElem<boolean>;
  disp_test_adv: XmlElem<boolean>;
  disp_test_settings: XmlElem<boolean>;
  disp_web: XmlElem<boolean>;
  disp_fin: XmlElem<boolean>;
  disp_edu: XmlElem<boolean>;
  disp_edu_settings: XmlElem<boolean>;
  disp_ass: XmlElem<boolean>;
  disp_prop: XmlElem<boolean>;
  disp_admin: XmlElem<boolean>;
  disp_exs: XmlElem<boolean>;
  disp_secur: XmlElem<boolean>;
  disp_recr: XmlElem<boolean>;
  disp_pwt: XmlElem<boolean>;
  disp_knowlcntrl: XmlElem<boolean>;
  disp_knowlcntrl_settings: XmlElem<boolean>;
  disp_career: XmlElem<boolean>;
  disp_dnoffice: XmlElem<boolean>;
  disp_vclass: XmlElem<boolean>;
  disp_courselab: XmlElem<boolean>;
  disp_library: XmlElem<boolean>;
  disp_crm: XmlElem<boolean>;
  disp_crm_settings: XmlElem<boolean>;
  disp_game: XmlElem<boolean>;
  disp_prize: XmlElem<boolean>;
  disp_chatbots: XmlElem<boolean>;
  disp_mobile: XmlElem<boolean>;
  disp_proctoring: XmlElem<boolean>;
  disp_crmsale: XmlElem<boolean>;
  disp_wiki: XmlElem<boolean>;
  disp_collaborator_schedule: XmlElem<boolean>;
  disp_calendar_items: XmlElem<boolean>;
  disp_project_management: XmlElem<boolean>;
  disp_continuity: XmlElem<boolean>;
  disp_courselab_server: XmlElem<boolean>;
  disp_recommended_service: XmlElem<boolean>;
  disp_personnel_document: XmlElem<boolean>;
  update_exist_package_obj: XmlElem<boolean>;
  customer: XmlElem<string | null>;
  courses_path: XmlElem<string>;
  web_path: XmlElem<string>;
  debug: XmlElem<boolean>;
  is_demo: XmlElem<boolean>;
  object_deleted_str: XmlElem<string>;
  curator_boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  tutor_boss_type_id: XmlElem<number | null, BossTypeCatalogDocumentTopElem>;
  project_manager_type_id: XmlElem<number | null>;
  default_contact_type_id: XmlElem<number | null, ContactTypeCatalogDocumentTopElem>;
  default_contact_result_id: XmlElem<number | null, ContactResultCatalogDocumentTopElem>;
  install_stamp: XmlElem<string | null>;
  OnInit(): void;
};
