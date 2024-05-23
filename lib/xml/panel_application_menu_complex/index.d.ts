interface PanelApplicationMenuComplexDocumentApplicationMenu {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  color: XmlElem<string>;
}

type PanelApplicationMenuComplexDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationMenuComplexDocument;
  application_menus: XmlMultiElem<PanelApplicationMenuComplexDocumentApplicationMenu>;
};

type PanelApplicationMenuComplexDocument = XmlDocument & {
  TopElem: PanelApplicationMenuComplexDocumentTopElem;
  panel_application_menu_complex: PanelApplicationMenuComplexDocumentTopElem;
};
