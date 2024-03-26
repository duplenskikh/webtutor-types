type ResourceCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.resource_types>;
  status: XmlElem<string, typeof common.course_test_states>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  resource_type_id: XmlElem<number, ResourceTypeCatalogDocumentTopElem>;
  allow_download: XmlElem<boolean>;
  allow_search: XmlElem<boolean>;
  allow_unauthorized_download: XmlElem<boolean>;
  comment: XmlElem<string>;
  use_count: XmlElem<number>;
  file_name: XmlElem<string>;
  size: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  file_path: XmlElem<string>;
  checksum: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
