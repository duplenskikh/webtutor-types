type SystemEventHandlerCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  is_enabled: XmlElem<boolean>;
  code_type: XmlElem<string>;
  system_event_id: XmlElem<number, SystemEventCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
