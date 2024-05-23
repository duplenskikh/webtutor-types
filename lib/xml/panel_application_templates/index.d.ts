type PanelApplicationTemplatesDocumentTopElem = XmlTopElem & {
  Doc: PanelApplicationTemplatesDocument;
  report_id: XmlElem<string>;
  report_template_id: XmlElem<number>;
  report_template_url: XmlElem<string>;
  report_template_type: XmlElem<string>;
  report_template_name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
};

type PanelApplicationTemplatesDocument = XmlDocument & {
  TopElem: PanelApplicationTemplatesDocumentTopElem;
  panel_application_templates: PanelApplicationTemplatesDocumentTopElem;
};
