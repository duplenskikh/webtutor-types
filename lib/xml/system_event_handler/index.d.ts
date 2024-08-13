type SystemEventHandlerDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: SystemEventHandlerDocument;
  is_enabled: XmlElem<boolean>;
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  perfom_condition: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  last_system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  last_is_enabled: XmlElem<boolean>;
};

type SystemEventHandlerDocument = XmlDocument & {
  TopElem: SystemEventHandlerDocumentTopElem;
  system_event_handler: SystemEventHandlerDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
