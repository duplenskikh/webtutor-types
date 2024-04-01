interface ViewPanelActionsDocumentBlockButton {
  name: XmlElem<string>;
  height: XmlElem<string>;
  title: XmlElem<string>;
  cmd: XmlElem<string>;
}

interface ViewPanelActionsDocumentBlockInformer {
  id: XmlElem<number, StatisticRecCatalogDocumentTopElem>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  title: XmlElem<string>;
  cmd: XmlElem<string>;
  color: XmlElem<string>;
  value: XmlElem<string>;
  value_str: XmlElem<string>;
  output_type: XmlElem<string>;
}

interface ViewPanelActionsDocumentBlock {
  id: XmlElem<string>;
  buttons: XmlMultiElem<ViewPanelActionsDocumentBlockButton>;
  informers: XmlMultiElem<ViewPanelActionsDocumentBlockInformer>;
}

interface ViewPanelActionsDocumentSearchArticle {
  id: XmlElem<number>;
  parent_id: XmlElem<number>;
  article_id: XmlElem<number>;
  name: XmlElem<string>;
  hasChildren: XmlElem<boolean>;
}

interface ViewPanelActionsDocumentSearch {
  fulltext: XmlElem<string>;
  error: XmlElem<string>;
  articles: XmlMultiElem<ViewPanelActionsDocumentSearchArticle>;
}

type ViewPanelActionsDocumentTopElem = XmlTopElem & {
  Doc: ViewPanelActionsDocument;
  variant: XmlElem<unknown>;
  blocks: XmlMultiElem<ViewPanelActionsDocumentBlock>;
  api_url: XmlElem<string>;
  show_stat: XmlElem<boolean>;
  show_button: XmlElem<boolean>;
  is_lite: XmlElem<boolean>;
  load_article: XmlElem<boolean>;
  calc_stat: XmlElem<boolean>;
  calculated_stat: XmlElem<boolean>;
  connect_state: XmlElem<string>;
  http_request: XmlElem<string>;
  http_desc_url: XmlElem<string>;
  search: XmlElem<ViewPanelActionsDocumentSearch>;
  timer_action(type: string): unknown;
  timer_failed_load(): unknown;
  update_desc(): unknown;
  get_default_article_code(): unknown;
  check_stat(): unknown;
  check_load_article(): unknown;
  update_informers(): unknown;
};

type ViewPanelActionsDocument = XmlDocument & {
  TopElem: ViewPanelActionsDocumentTopElem;
  view_panel_actions: ViewPanelActionsDocumentTopElem;
  OnInit(): void;
};
