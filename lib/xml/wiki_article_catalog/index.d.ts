type WikiArticleCatalogDocumentTopElem = XmlTopElem & { Doc: WikiArticleCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  wiki_base_id: XmlElem<number>;
  wiki_article_type_id: XmlElem<number>;
  acquaint_type_id: XmlElem<string>;
  status_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  author_id: XmlMultiElem<number>;
  publicate_date: XmlElem<Date>;
  critical_publicate_date: XmlElem<Date>;
  acquaint_group_ids: XmlMultiElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  files_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  access_group_ids: XmlMultiElem<number>;
}

type WikiArticleCatalogDocument = XmlDocument & { TopElem: WikiArticleCatalogDocumentTopElem; };
