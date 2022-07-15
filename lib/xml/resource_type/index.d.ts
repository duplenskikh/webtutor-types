interface ResourceTypeTopElem extends XmlTopElem<ResourceTypeDocument>, ObjectCodeNameBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
}

type ResourceTypeDocument = XmlDocument<ResourceTypeTopElem>;
