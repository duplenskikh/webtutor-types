interface LicenseLibraryMaterial {
  library_material_id?: XmlElem<number>;
}

interface LicenseCourse {
  course_id?: XmlElem<number>;
}

interface LicenseCatalog {
  name?: XmlElem<string>;
  max_records_num?: XmlElem<number>;
  checked?: XmlElem<boolean>;
}

interface LicenseAccessBlockType {
  id?: XmlElem<string>;
}

interface LicenseGenerate {
  date?: XmlElem<Date>;
  user_id?: XmlElem<number>;
  user_fullname?: XmlElem<string>;
}

interface LicenseAdditionalKey {
  id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  type_id?: XmlElem<string>;
  ident?: XmlElem<string>;
  public_key?: XmlElem<string>;
  private_key?: XmlElem<string>;
}

interface LicenseTopElem extends XmlTopElem<LicenseDocument>, ObjectCodeNameBase, AdminAccessBase, CustomElemsBase {
  object_id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  license_type?: XmlElem<string>;
  domain_name?: XmlElem<string>;
  domain_short_name?: XmlElem<string>;
  computer_name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  is_temporary?: XmlElem<boolean>;
  status_id?: XmlElem<string>;
  sale_contract_id?: XmlElem<number>;
  inventory?: XmlElem<boolean>;
  maintaince_date?: XmlElem<Date>;
  users_num?: XmlElem<number>;
  license_info?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  encryption_key?: XmlElem<string>;
  decryption_key?: XmlElem<string>;
  demo?: XmlElem<boolean>;
  library_materials?: XmlMultiElem<LicenseLibraryMaterial>;
  courses?: XmlMultiElem<LicenseCourse>;
  catalogs?: XmlMultiElem<LicenseCatalog>;
  access_block_types?: XmlMultiElem<LicenseAccessBlockType>;
  generates?: XmlMultiElem<LicenseGenerate>;
  additional_keys?: XmlMultiElem<LicenseAdditionalKey>;
  access?: XmlElem<AccessDocBase>;
}

type LicenseDocument = XmlDocument<LicenseTopElem>;
