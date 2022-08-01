interface AdminConfigurationDocumentFuncBlockSectionApplication {
  application_id?: XmlElem<number>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  resource_id?: XmlElem<string>;
}
interface AdminConfigurationDocumentFuncBlockSection {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  color?: XmlElem<string>;
  applications?: XmlMultiElem<AdminConfigurationDocumentFuncBlockSectionApplication>;
}
interface AdminConfigurationDocumentFuncBlock {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  min_height?: XmlElem<number>;
  width?: XmlElem<number>;
  sections?: XmlMultiElem<AdminConfigurationDocumentFuncBlockSection>;
}

type AdminConfigurationDocumentTopElem = XmlTopElem & { Doc: AdminConfigurationDocument } & 
ObjectCodeNameBase & {
  func_blocks?: XmlMultiElem<AdminConfigurationDocumentFuncBlock>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  desc?: XmlElem<string>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
}

type AdminConfigurationDocument = XmlDocument & { TopElem: AdminConfigurationDocumentTopElem; };
