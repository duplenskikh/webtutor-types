type KnowledgeClassifierCatalogDocumentTopElem = XmlTopElem & { Doc: KnowledgeClassifierCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KnowledgeClassifierCatalogDocument = XmlDocument & { TopElem: KnowledgeClassifierCatalogDocumentTopElem; };
