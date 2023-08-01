type ViewConfigurationDocumentTopElem = XmlTopElem & { Doc: ViewConfigurationDocument } & 
ObjectCodeNameBase &
ViewBase & {
  catalog_name: XmlElem<string>;
  link_name: XmlElem<string>;
  link_selector: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ViewConfigurationDocument = XmlDocument & {
  TopElem: ViewConfigurationDocumentTopElem;
};
