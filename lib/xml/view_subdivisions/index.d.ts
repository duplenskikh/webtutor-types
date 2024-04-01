type ViewSubdivisionsDocumentTopElem = XmlTopElem &
ViewColumnsBase &
MsViewConfigurationBase & {
  Doc: ViewSubdivisionsDocument;
  view_tab_str: XmlElem<string>;
  view_sub_selector: XmlElem<number>;
  view_org_selector: XmlElem<number>;
  view_tmp_selector: XmlElem<number>;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  link_catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_field: XmlElem<string>;
  link_field_value: XmlElem<number>;
  link_parent_catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_selector: XmlElem<string>;
  is_card: XmlElem<boolean>;
  count_sel: XmlElem<number>;
  rows: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string): number;
  navigate_link(list: unknown, screen: unknown, customAdminTemplateTopElem: unknown): unknown;
  show_preview_object(): unknown;
  set_sel_action(list: unknown, screen: unknown): unknown;
};

type ViewSubdivisionsDocument = XmlDocument & {
  TopElem: ViewSubdivisionsDocumentTopElem;
  view_subdivisions: ViewSubdivisionsDocumentTopElem;
  OnInit(): void;
};
