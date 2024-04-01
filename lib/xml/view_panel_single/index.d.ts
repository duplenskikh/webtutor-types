type ViewPanelSingleDocumentTopElem = XmlTopElem & {
  Doc: ViewPanelSingleDocument;
  view_configuration_name: XmlElem<string>;
};

type ViewPanelSingleDocument = XmlDocument & {
  TopElem: ViewPanelSingleDocumentTopElem;
  view_panel_single: ViewPanelSingleDocumentTopElem;
};
