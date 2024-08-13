type SystemEventHandlerCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  is_enabled: XmlElem<boolean>;
  code_type: XmlElem<string | null>;
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
