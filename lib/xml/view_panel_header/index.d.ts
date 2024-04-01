type ViewPanelHeaderDocumentTopElem = XmlTopElem & {
  Doc: ViewPanelHeaderDocument;
  first_catalog_url: XmlElem<string>;
  first_access_item: XmlElem<unknown>;
  second_access_item: XmlElem<unknown>;
  third_access_item: XmlElem<unknown>;
};

type ViewPanelHeaderDocument = XmlDocument & {
  TopElem: ViewPanelHeaderDocumentTopElem;
  view_panel_header: ViewPanelHeaderDocumentTopElem;
};
