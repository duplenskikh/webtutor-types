type KnowledgePartCatalogDocumentTopElem = XmlTopElem & { Doc: KnowledgePartCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  parent_object_id: XmlElem<number>;
  knowledge_classifier_id: XmlElem<number>;
  experts: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
  previous_version_object_id: XmlElem<number>;
  status_in_knowledge_map: XmlElem<string>;
  knowledge_part_type_id: XmlElem<number>;
  confirmation_type: XmlElem<string>;
  expertise_level_index: XmlElem<number>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KnowledgePartCatalogDocument = XmlDocument & { TopElem: KnowledgePartCatalogDocumentTopElem; };
