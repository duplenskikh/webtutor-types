type WikiBaseCatalogDocumentTopElem = XmlTopElem & { Doc: WikiBaseCatalogDocument } & 
AccessDocBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  previous_version_object_id: XmlElem<number>;
  status_in_knowledge_map: XmlElem<string>;
  copy_access_in_new_article: XmlElem<boolean>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type WikiBaseCatalogDocument = XmlDocument & { TopElem: WikiBaseCatalogDocumentTopElem; };
