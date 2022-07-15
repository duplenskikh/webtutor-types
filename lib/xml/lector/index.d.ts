interface LectorTopElem extends XmlTopElem<LectorDocument>, PersonBase, PassportDataBase, CustomElemsBase, AdminAccessBase, PathSubsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  type?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  person_position_name?: XmlElem<string>;
  person_subdivision_name?: XmlElem<string>;
  allow_publication?: XmlElem<boolean>;
  is_dismiss?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  access?: XmlElem<AccessDocBase>;
  lector_fullname?(): any;
}

type LectorDocument = XmlDocument<LectorTopElem>;
