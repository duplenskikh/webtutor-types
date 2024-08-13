type StatementAttachmentCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  usage_type: XmlElem<string | null>;
  content_type: XmlElem<string | null>;
  length: XmlElem<string | null>;
  file_hash: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
