interface AdminConfigurationFuncBlockSectionApplication {
  application_id?: XmlElem<number>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  resource_id?: XmlElem<string>;
}

interface AdminConfigurationFuncBlockSection {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  color?: XmlElem<string>;
  applications?: XmlMultiElem<AdminConfigurationFuncBlockSectionApplication>;
}

interface AdminConfigurationFuncBlock {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  min_height?: XmlElem<number>;
  width?: XmlElem<number>;
  sections?: XmlMultiElem<AdminConfigurationFuncBlockSection>;
}

interface AdminConfigurationView extends DescBase {
}

interface AdminConfigurationTopElem extends XmlTopElem<AdminConfigurationDocument>, ObjectCodeNameBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  changed?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
  func_blocks?: XmlMultiElem<AdminConfigurationFuncBlock>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<AdminConfigurationView>;
}

type AdminConfigurationDocument = XmlDocument<AdminConfigurationTopElem>;
