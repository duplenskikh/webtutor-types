type PanelApplicationViewsDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationViewsDocument;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
};

type PanelApplicationViewsDocument = XmlDocument & {
  TopElem: PanelApplicationViewsDocumentTopElem;
  panel_application_views: PanelApplicationViewsDocumentTopElem;
};
