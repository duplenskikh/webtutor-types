type StatementAttachmentDocumentTopElem = XmlTopElem & {
  Doc: StatementAttachmentDocument;
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  usage_type: XmlElem<string | null>;
  content_type: XmlElem<string | null>;
  length: XmlElem<string | null>;
  file_hash: XmlElem<string | null>;
  file_url: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StatementAttachmentDocument = XmlDocument & {
  TopElem: StatementAttachmentDocumentTopElem;
  statement_attachment: StatementAttachmentDocumentTopElem;
};
