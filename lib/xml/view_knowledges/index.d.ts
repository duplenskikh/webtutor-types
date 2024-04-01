type ViewKnowledgesDocumentTopElem = XmlTopElem &
ViewColumnsBase &
MsViewConfigurationBase &
MsViewCatalogBase & {
  Doc: ViewKnowledgesDocument;
  select_type_id: XmlElem<string>;
  view_part_selector: XmlElem<number>;
  view_configuration_id: XmlElem<number, ViewConfigurationCatalogDocumentTopElem>;
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
};

type ViewKnowledgesDocument = XmlDocument & {
  TopElem: ViewKnowledgesDocumentTopElem;
  view_knowledges: ViewKnowledgesDocumentTopElem;
  OnInit(): void;
};
