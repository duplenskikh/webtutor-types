type KnowledgePartCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  knowledge_classifier_id: XmlElem<number, KnowledgeClassifierCatalogDocumentTopElem>;
  experts: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
  previous_version_object_id: XmlElem<number, KnowledgePartCatalogDocumentTopElem>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  knowledge_part_type_id: XmlElem<number, KnowledgePartTypeCatalogDocumentTopElem>;
  confirmation_type: XmlElem<string, typeof common.confirmation_types>;
  expertise_level_index: XmlElem<number>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
