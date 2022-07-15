interface DeviceRegView {
  selector?: XmlElem<string>;
}

interface DeviceRegTopElem extends XmlTopElem<DeviceRegDocument> {
  code?: XmlElem<string>;
  device_id?: XmlElem<string>;
  device_desc?: XmlElem<string>;
  pc?: XmlElem<string>;
  last_access_date?: XmlElem<Date>;
  mobile_app_config_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DeviceRegView>;
}

type DeviceRegDocument = XmlDocument<DeviceRegTopElem>;
