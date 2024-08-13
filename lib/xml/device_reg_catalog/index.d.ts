type DeviceRegCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  device_id: XmlElem<string | null>;
  last_access_date: XmlElem<Date | null>;
  mobile_app_config_id: XmlElem<number | null, MobileAppConfigCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  tokens: XmlMultiElemObject<number | null>;
  OnBuild(): void;
};
