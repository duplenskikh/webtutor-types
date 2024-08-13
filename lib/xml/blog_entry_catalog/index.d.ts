type BlogEntryCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  allow_comment: XmlElem<boolean | null>;
  blocked: XmlElem<boolean>;
  labels: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  feed_item_id: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  comment_num: XmlElem<number | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
