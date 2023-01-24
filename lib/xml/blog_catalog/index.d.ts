type BlogCatalogDocumentTopElem = XmlTopElem & { Doc: BlogCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  channel_provider_id: XmlElem<number>;
  permit_subscription: XmlElem<boolean>;
  allow_anonymous_comment: XmlElem<boolean>;
  creator_id: XmlElem<number>;
  creator_full_info: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  authors_num: XmlElem<number>;
  authors: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type BlogCatalogDocument = XmlDocument & { TopElem: BlogCatalogDocumentTopElem; };
