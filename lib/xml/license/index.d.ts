interface LicenseDocumentLibraryMaterial {
  library_material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
}

interface LicenseDocumentCourse {
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
}

interface LicenseDocumentCatalog {
  name: XmlElem<string, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number>;
}

interface LicenseDocumentAccessBlockType {
  id: XmlElem<string, typeof common.access_block_types>;
}

interface LicenseDocumentGenerate {
  date: XmlElem<Date>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  user_fullname: XmlElem<string>;
}

interface LicenseDocumentAdditionalKey {
  id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  type_id: XmlElem<string>;
  ident: XmlElem<string>;
  public_key: XmlElem<string>;
  private_key: XmlElem<string>;
}

type LicenseDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LicenseDocument;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  license_type: XmlElem<string>;
  domain_name: XmlElem<string>;
  domain_short_name: XmlElem<string>;
  computer_name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_temporary: XmlElem<boolean>;
  status_id: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  sale_contract_id: XmlElem<number, SaleContractCatalogDocumentTopElem>;
  inventory: XmlElem<boolean>;
  maintaince_date: XmlElem<Date>;
  users_num: XmlElem<number>;
  library_materials: XmlMultiElem<LicenseDocumentLibraryMaterial>;
  courses: XmlMultiElem<LicenseDocumentCourse>;
  catalogs: XmlMultiElem<LicenseDocumentCatalog>;
  access_block_types: XmlMultiElem<LicenseDocumentAccessBlockType>;
  generates: XmlMultiElem<LicenseDocumentGenerate>;
  additional_keys: XmlMultiElem<LicenseDocumentAdditionalKey>;
  license_info: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  encryption_key: XmlElem<string>;
  decryption_key: XmlElem<string>;
  demo: XmlElem<boolean>;
};

type LicenseDocument = XmlDocument & {
  TopElem: LicenseDocumentTopElem;
};
