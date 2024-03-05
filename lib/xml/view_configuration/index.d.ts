type ViewConfigurationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ViewBase &
MsViewConfigurationBase & {
  Doc: ViewConfigurationDocument;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_name: XmlElem<string>;
  link_selector: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ViewConfigurationDocument = XmlDocument & {
  TopElem: ViewConfigurationDocumentTopElem;
};
