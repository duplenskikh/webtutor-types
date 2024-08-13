type DocumentCommentEntryCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  deleted: XmlElem<boolean>;
  how2show: XmlElem<string, typeof common.forum_person_info_types>;
  author_info: XmlElem<string | null>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  portal_doc_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  parent_document_entry_id: XmlElem<number | null, DocumentCommentEntryCatalogDocumentTopElem>;
  last_create_date: XmlElem<Date | null>;
  child_num: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
