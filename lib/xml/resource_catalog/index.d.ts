type ResourceCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.resource_types>;
  status: XmlElem<string | null, typeof common.course_test_states>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  resource_type_id: XmlElem<number | null, ResourceTypeCatalogDocumentTopElem>;
  allow_download: XmlElem<boolean | null>;
  allow_search: XmlElem<boolean | null>;
  allow_unauthorized_download: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  use_count: XmlElem<number>;
  file_name: XmlElem<string | null>;
  size: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  file_path: XmlElem<string | null>;
  checksum: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
