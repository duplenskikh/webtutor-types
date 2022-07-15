interface ViewConfigurationTopElem extends XmlTopElem<ViewConfigurationDocument>, ObjectCodeNameBase, ViewBase, MsViewConfigurationBase {
  catalog_name?: XmlElem<string>;
  link_name?: XmlElem<string>;
  link_selector?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
}

type ViewConfigurationDocument = XmlDocument<ViewConfigurationTopElem>;
