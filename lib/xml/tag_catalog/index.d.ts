type TagCatalogDocumentTopElem = XmlTopElem & { Doc: TagCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  knowledge_part_id: XmlElem<number>;
  require_acknowledgement: XmlElem<boolean>;
  experts: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TagCatalogDocument = XmlDocument & { TopElem: TagCatalogDocumentTopElem; };
