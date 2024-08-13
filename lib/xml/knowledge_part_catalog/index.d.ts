type KnowledgePartCatalogDocumentTopElem = XmlTopElem &
AccessDocBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  parent_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  knowledge_classifier_id: XmlElem<number | null, KnowledgeClassifierCatalogDocumentTopElem>;
  experts: XmlElem<string | null>;
  require_acknowledgement: XmlElem<boolean | null>;
  previous_version_object_id: XmlElem<number | null, KnowledgePartCatalogDocumentTopElem>;
  status_in_knowledge_map: XmlElem<string | null, typeof common.status_in_knowledge_map_types>;
  knowledge_part_type_id: XmlElem<number | null, KnowledgePartTypeCatalogDocumentTopElem>;
  confirmation_type: XmlElem<string | null, typeof common.confirmation_types>;
  expertise_level_index: XmlElem<number | null>;
  tags: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
