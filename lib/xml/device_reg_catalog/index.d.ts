type DeviceRegCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  device_id: XmlElem<string>;
  last_access_date: XmlElem<Date>;
  mobile_app_config_id: XmlElem<number, MobileAppConfigCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  tokens: XmlMultiElemObject<number>;
  OnBuild(): void;
};
