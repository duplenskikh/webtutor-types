type BlogEntryCatalogDocumentTopElem = XmlTopElem & { Doc: BlogEntryCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  create_date: XmlElem<Date>;
  allow_comment: XmlElem<boolean>;
  blocked: XmlElem<boolean>;
  labels: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  blog_id: XmlElem<number>;
  feed_item_id: XmlElem<string>;
  object_id: XmlElem<number>;
  comment_num: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BlogEntryCatalogDocument = XmlDocument & { TopElem: BlogEntryCatalogDocumentTopElem; };
