interface BossTypeDocumentObjectType {
  id: XmlElem<string | null, typeof common.exchange_object_types>;
}

interface BossTypeDocumentOperation {
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
}

type BossTypeDocumentTopElem = XmlTopElem & {
  Doc: BossTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_types: XmlMultiElem<BossTypeDocumentObjectType | null>;
  operations: XmlMultiElem<BossTypeDocumentOperation | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type BossTypeDocument = XmlDocument & {
  TopElem: BossTypeDocumentTopElem;
  boss_type: BossTypeDocumentTopElem;
  DocDesc(): string;
};
