interface MobileAppConfigDocumentSettingsAuxAuxParam {
  id: XmlElem<string>;
  value: XmlElem<string>;
  tag: XmlElem<string>;
}

interface MobileAppConfigDocumentSettingsAux {
  aux_param: XmlElem<MobileAppConfigDocumentSettingsAuxAuxParam>;
}

interface MobileAppConfigDocumentSettings extends WebVariablesBase {
  aux: XmlElem<MobileAppConfigDocumentSettingsAux>;
}

type MobileAppConfigDocumentTopElem = XmlTopElem & {
  Doc: MobileAppConfigDocument;
  id: XmlElem<number>;
  catalog: XmlElem<string>;
  uid: XmlElem<number>;
  title: XmlElem<string>;
  parent_section_id: XmlElem<number>;
  is_default: XmlElem<boolean>;
  is_menu: XmlElem<boolean>;
  is_offline: XmlElem<boolean>;
  hidden: XmlElem<boolean>;
  settings: XmlElem<MobileAppConfigDocumentSettings>;
};

type MobileAppConfigDocument = XmlDocument & {
  TopElem: MobileAppConfigDocumentTopElem;
};
