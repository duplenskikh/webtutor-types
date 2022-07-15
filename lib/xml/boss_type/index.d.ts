interface BossTypeObjectType {
  id?: XmlElem<string>;
}

interface BossTypeOperation {
  operation_id?: XmlElem<number>;
}

interface BossTypeView {
  selector?: XmlElem<string>;
}

interface BossTypeTopElem extends XmlTopElem<BossTypeDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  object_types?: XmlMultiElem<BossTypeObjectType>;
  operations?: XmlMultiElem<BossTypeOperation>;
  view?: XmlElem<BossTypeView>;
}

type BossTypeDocument = XmlDocument<BossTypeTopElem>;
