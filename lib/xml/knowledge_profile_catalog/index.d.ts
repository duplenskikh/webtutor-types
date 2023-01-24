type KnowledgeProfileCatalogDocumentTopElem = XmlTopElem & { Doc: KnowledgeProfileCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
}

type KnowledgeProfileCatalogDocument = XmlDocument & { TopElem: KnowledgeProfileCatalogDocumentTopElem; };
