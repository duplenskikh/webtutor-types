interface AdminConfigurationDocumentFuncBlockSectionApplication {
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  resource_id: XmlElem<string, ResourceCatalogDocumentTopElem>;
}

interface AdminConfigurationDocumentFuncBlockSection {
  id: XmlElem<string>;
  name: XmlElem<string>;
  color: XmlElem<string>;
  applications: XmlMultiElem<AdminConfigurationDocumentFuncBlockSectionApplication>;
}

interface AdminConfigurationDocumentFuncBlock {
  id: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<string, ResourceCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  min_height: XmlElem<number>;
  width: XmlElem<number>;
  sections: XmlMultiElem<AdminConfigurationDocumentFuncBlockSection>;
}

type AdminConfigurationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: AdminConfigurationDocument;
  func_blocks: XmlMultiElem<AdminConfigurationDocumentFuncBlock>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  changed: XmlElem<boolean>;
  is_std: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
};

type AdminConfigurationDocument = XmlDocument & {
  TopElem: AdminConfigurationDocumentTopElem;
  admin_configuration: AdminConfigurationDocumentTopElem;
  DocDesc(): string;
};
