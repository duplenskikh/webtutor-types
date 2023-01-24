type SystemEventHandlerCatalogDocumentTopElem = XmlTopElem & { Doc: SystemEventHandlerCatalogDocument } & 
ObjectCodeNameBase & {
  is_enabled: XmlElem<boolean>;
  code_type: XmlElem<string>;
  system_event_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SystemEventHandlerCatalogDocument = XmlDocument & { TopElem: SystemEventHandlerCatalogDocumentTopElem; };
