interface DeviceRegDocumentToken {
  id: XmlElem<number>;
  status: XmlElem<string>;
  creation_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
}

type DeviceRegDocumentTopElem = XmlTopElem & {
  Doc: DeviceRegDocument;
  code: XmlElem<string>;
  device_id: XmlElem<string>;
  device_desc: XmlElem<string>;
  pc: XmlElem<string>;
  last_access_date: XmlElem<Date>;
  mobile_app_config_id: XmlElem<number, MobileAppConfigCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  tokens: XmlMultiElem<DeviceRegDocumentToken>;
};

type DeviceRegDocument = XmlDocument & {
  TopElem: DeviceRegDocumentTopElem;
  device_reg: DeviceRegDocumentTopElem;
  DocDesc(): string;
};
