interface PanelApplicationMenuDocumentApplicationMenu {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  color: XmlElem<string>;
}

type PanelApplicationMenuDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationMenuDocument;
  application_menus: XmlMultiElem<PanelApplicationMenuDocumentApplicationMenu>;
};

type PanelApplicationMenuDocument = XmlDocument & {
  TopElem: PanelApplicationMenuDocumentTopElem;
  panel_application_menu: PanelApplicationMenuDocumentTopElem;
};
