type DocumentCatalogDocumentTopElem = XmlTopElem &
DocumentAttributesBase &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  parent_document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  custom_template_type: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  access_exists: XmlElem<boolean | null>;
  catalog_list_desc: XmlElem<string | null>;
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number | null>;
  parent_object_name: XmlElem<string | null>;
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  kp_start_date: XmlElem<Date | null>;
  kp_end_date: XmlElem<Date | null>;
  create_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  invariable: XmlElem<boolean | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};
