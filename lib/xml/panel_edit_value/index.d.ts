type PanelEditValueDocumentTopElem = XmlTopElem &
ViewConditionBase &
FieldNamesBase & {
  Doc: PanelEditValueDocument;
  catalog_name: XmlElem<string>;
};

type PanelEditValueDocument = XmlDocument & {
  TopElem: PanelEditValueDocumentTopElem;
  panel_edit_value: PanelEditValueDocumentTopElem;
};
