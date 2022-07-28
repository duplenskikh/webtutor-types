interface BossTypeDocumentObjectType {
  id: XmlElem<string>;
}

interface BossTypeDocumentOperation {
  operation_id: XmlElem<number>;
}

type BossTypeDocumentTopElem = XmlTopElem & { Doc: BossTypeDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_types: XmlMultiElem<BossTypeDocumentObjectType>;
  operations: XmlMultiElem<BossTypeDocumentOperation>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
}

type BossTypeDocument = XmlDocument & { TopElem: BossTypeDocumentTopElem; };
