interface LicenseDocumentLibraryMaterial {
  library_material_id?: XmlElem<number>;
}

interface LicenseDocumentCourse {
  course_id?: XmlElem<number>;
}

interface LicenseDocumentCatalog {
  name?: XmlElem<string>;
  max_records_num?: XmlElem<number>;
}

interface LicenseDocumentAccessBlockType {
  id?: XmlElem<string>;
}

interface LicenseDocumentGenerate {
  date?: XmlElem<Date>;
  user_id?: XmlElem<number>;
  user_fullname?: XmlElem<string>;
}

interface LicenseDocumentAdditionalKey {
  id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  type_id?: XmlElem<string>;
  ident?: XmlElem<string>;
  public_key?: XmlElem<string>;
  private_key?: XmlElem<string>;
}

type LicenseDocumentTopElem = XmlTopElem & { Doc: LicenseDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase &
  CustomElemsBase & {
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
  library_materials?: XmlMultiElem<LicenseDocumentLibraryMaterial>;
  courses?: XmlMultiElem<LicenseDocumentCourse>;
  catalogs?: XmlMultiElem<LicenseDocumentCatalog>;
  access_block_types?: XmlMultiElem<LicenseDocumentAccessBlockType>;
  generates?: XmlMultiElem<LicenseDocumentGenerate>;
  additional_keys?: XmlMultiElem<LicenseDocumentAdditionalKey>;
  license_info?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  encryption_key?: XmlElem<string>;
  decryption_key?: XmlElem<string>;
  demo?: XmlElem<boolean>;
}

type LicenseDocument = XmlDocument & { TopElem: LicenseDocumentTopElem; };
