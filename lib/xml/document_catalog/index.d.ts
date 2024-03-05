type DocumentCatalogDocumentTopElem = XmlTopElem &
DocumentAttributesBase &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  parent_document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  custom_template_type: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  access_exists: XmlElem<boolean>;
  catalog_list_desc: XmlElem<string>;
  parent_object_type: XmlElem<string, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number>;
  parent_object_name: XmlElem<string>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  kp_start_date: XmlElem<Date>;
  kp_end_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  invariable: XmlElem<boolean>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): unknown;
};
