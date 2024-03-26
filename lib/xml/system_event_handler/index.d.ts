type SystemEventHandlerDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: SystemEventHandlerDocument;
  is_enabled: XmlElem<boolean>;
  system_event_id: XmlElem<number, SystemEventCatalogDocumentTopElem>;
  perfom_condition: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  last_system_event_id: XmlElem<number, SystemEventCatalogDocumentTopElem>;
  last_is_enabled: XmlElem<boolean>;
};

type SystemEventHandlerDocument = XmlDocument & {
  TopElem: SystemEventHandlerDocumentTopElem;
  system_event_handler: SystemEventHandlerDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
