type DocumentCatalogDocumentTopElem = XmlTopElem & { Doc: DocumentCatalogDocument } & 
DocumentAttributesBase &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  parent_document_id: XmlElem<number>;
  site_id: XmlElem<number>;
  custom_template_type: XmlElem<number>;
  access_exists: XmlElem<boolean>;
  catalog_list_desc: XmlElem<string>;
  parent_object_type: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  parent_object_name: XmlElem<string>;
  status_in_knowledge_map: XmlElem<string>;
  kp_start_date: XmlElem<Date>;
  kp_end_date: XmlElem<Date>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  invariable: XmlElem<boolean>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type DocumentCatalogDocument = XmlDocument & { TopElem: DocumentCatalogDocumentTopElem; };
