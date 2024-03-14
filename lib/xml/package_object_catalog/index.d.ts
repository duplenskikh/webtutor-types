interface PackageObjectsDocumentObject {
  id: XmlElem<number>;
  eid: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  modify: XmlElem<boolean>;
}

interface PackageObjectsDocumentFile {
  code: XmlElem<string>;
  url: XmlElem<string>;
  type: XmlElem<string, typeof common.package_types>;
  base_url: XmlElem<string>;
}

interface PackageObjectsDocumentCustomTemplate {
  catalog_name: XmlElem<string>;
}

type PackageObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<string>;
  name: XmlElem<string>;
  objects: XmlMultiElem<PackageObjectsDocumentObject>;
  add_deleted_objects: XmlElem<boolean>;
  process_custom_templates: XmlElem<boolean>;
  process_access_roles: XmlElem<boolean>;
  files: XmlMultiElem<PackageObjectsDocumentFile>;
  custom_templates: XmlMultiElem<PackageObjectsDocumentCustomTemplate>;
};
