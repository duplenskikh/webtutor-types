type DeviceRegCatalogDocumentTopElem = XmlTopElem & { Doc: DeviceRegCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  device_id: XmlElem<string>;
  last_access_date: XmlElem<Date>;
  mobile_app_config_id: XmlElem<number>;
  person_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DeviceRegCatalogDocument = XmlDocument & { TopElem: DeviceRegCatalogDocumentTopElem; };
