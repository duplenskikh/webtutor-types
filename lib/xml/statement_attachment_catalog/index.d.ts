type StatementAttachmentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  usage_type: XmlElem<string>;
  content_type: XmlElem<string>;
  length: XmlElem<string>;
  file_hash: XmlElem<string>;
  file_url: XmlElem<string>;
  statement_id: XmlElem<number, StatementCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
