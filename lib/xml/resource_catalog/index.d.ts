type ResourceCatalogDocumentTopElem = XmlTopElem & { Doc: ResourceCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  status: XmlElem<string>;
  resource_id: XmlElem<number>;
  resource_type_id: XmlElem<number>;
  allow_download: XmlElem<boolean>;
  allow_search: XmlElem<boolean>;
  allow_unauthorized_download: XmlElem<boolean>;
  comment: XmlElem<string>;
  use_count: XmlElem<number>;
  file_name: XmlElem<string>;
  size: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  file_path: XmlElem<string>;
  checksum: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ResourceCatalogDocument = XmlDocument & { TopElem: ResourceCatalogDocumentTopElem; };
