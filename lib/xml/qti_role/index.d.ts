type QtiRoleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
KnowledgePartsBase & {
  Doc: QtiRoleDocument;
  parent_role_id: XmlElem<number>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type QtiRoleDocument = XmlDocument & {
  TopElem: QtiRoleDocumentTopElem;
};
