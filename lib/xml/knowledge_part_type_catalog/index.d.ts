type KnowledgePartTypeCatalogDocumentTopElem = XmlTopElem & { Doc: KnowledgePartTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KnowledgePartTypeCatalogDocument = XmlDocument & { TopElem: KnowledgePartTypeCatalogDocumentTopElem; };
