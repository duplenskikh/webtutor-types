interface ViewPanelDocumentBlockButton {
  name: XmlElem<string>;
  title: XmlElem<string>;
  icon: XmlElem<string>;
  cmd: XmlElem<string>;
}

interface ViewPanelDocumentBlock {
  id: XmlElem<string>;
  height: XmlElem<string>;
  structure_item_id: XmlElem<string>;
  buttons: XmlMultiElem<ViewPanelDocumentBlockButton>;
}

type ViewPanelDocumentTopElem = XmlTopElem &
BlockReportsBase & {
  Doc: ViewPanelDocument;
  top_tabs: XmlElem<unknown>;
  top_tabs_num: XmlElem<number>;
  bottom_tabs: XmlElem<unknown>;
  bottom_tabs_num: XmlElem<number>;
  tabs: XmlElem<unknown>;
  tabs_num: XmlElem<number>;
  small_tab_id: XmlElem<string>;
  small_row_num: XmlElem<number>;
  frame: XmlElem<string>;
  user_access_blocks: XmlElem<unknown>;
  disp_favorits: XmlElem<boolean>;
  requests_env: XmlElem<unknown>;
  responses_env: XmlElem<unknown>;
  custom_reports_env: XmlElem<unknown>;
  reports_env: XmlElem<unknown>;
  doc_types_env: XmlElem<unknown>;
  object_datas_env: XmlElem<unknown>;
  view_id: XmlElem<string>;
  blocks: XmlMultiElem<ViewPanelDocumentBlock>;
  first_settings_block_name: XmlElem<string>;
  second_settings_block_name: XmlElem<string>;
  set_tree_action(newValue: unknown, fldItem: unknown): unknown;
};

type ViewPanelDocument = XmlDocument & {
  TopElem: ViewPanelDocumentTopElem;
  view_panel: ViewPanelDocumentTopElem;
  OnInit(): void;
};
