type StatementAttachmentDocumentTopElem = XmlTopElem & { Doc: StatementAttachmentDocument } & {
  id?: XmlElem<number>;
  path?: XmlElem<string>;
  usage_type?: XmlElem<string>;
  content_type?: XmlElem<string>;
  length?: XmlElem<string>;
  file_hash?: XmlElem<string>;
  file_url?: XmlElem<string>;
  statement_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
}

type StatementAttachmentDocument = XmlDocument & { TopElem: StatementAttachmentDocumentTopElem; };
