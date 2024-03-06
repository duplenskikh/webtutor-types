interface BossTypeDocumentObjectType {
  id: XmlElem<string, typeof common.exchange_object_types>;
}

interface BossTypeDocumentOperation {
  operation_id: XmlElem<number, OperationCatalogDocumentTopElem>;
}

type BossTypeDocumentTopElem = XmlTopElem & {
  Doc: BossTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_types: XmlMultiElem<BossTypeDocumentObjectType>;
  operations: XmlMultiElem<BossTypeDocumentOperation>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type BossTypeDocument = XmlDocument & {
  TopElem: BossTypeDocumentTopElem;
  boss_type: BossTypeDocumentTopElem;
  DocDesc(): unknown;
};
