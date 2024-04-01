type ViewDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase &
FieldNamesBase &
MsViewConfigurationBase &
ViewDispButtonBase & {
  Doc: ViewDocument;
  category_select_id: XmlElem<number>;
  category_name: XmlElem<string>;
  category_type: XmlElem<string>;
  category_date_type: XmlElem<string>;
  link_catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_field: XmlElem<string>;
  link_field_value: XmlElem<number>;
  link_parent_catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_selector: XmlElem<string>;
  is_card: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  role_name: XmlElem<string>;
  count_sel: XmlElem<number>;
  count_arr: XmlElem<number>;
  text_filter: XmlElem<string>;
  doc_type_id: XmlElem<number, DocTypeCatalogDocumentTopElem>;
  disp_mode: XmlElem<string>;
  disp_filter_panel: XmlElem<boolean>;
  select_mode: XmlElem<string>;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string, gridItemName: string): number;
  obtain_category(field: string, dateType: string): unknown;
  obtain_link_catalog(catalogName: string, clear: boolean): unknown;
  navigate_link(list: unknown, screen: unknown, customAdminTemplateTopElem: unknown, selId: number): unknown;
  show_preview_object(): unknown;
  run_screen_action(actionName: string, screen: unknown): unknown;
  set_sel_action(list: unknown, screen: unknown): unknown;
  disp_roles(): unknown;
  disp_role_actions(): unknown;
  get_view_text(param: string): unknown;
  init_values_from_url(url: string): unknown;
};

type ViewDocument = XmlDocument & {
  TopElem: ViewDocumentTopElem;
  view: ViewDocumentTopElem;
  OnInit(): void;
};
