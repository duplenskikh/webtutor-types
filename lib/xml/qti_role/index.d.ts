interface QtiRoleDocumentRole extends ObjectCodeNameBase, KnowledgePartsBase {
  parent_role_id: XmlElem<number | null>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
}

type QtiRoleDocumentTopElem = XmlTopElem & {
  Doc: QtiRoleDocument;
};

type QtiRoleDocument = XmlDocument & {
  TopElem: QtiRoleDocumentTopElem;
  qti_role: QtiRoleDocumentTopElem;
  role: XmlElem<QtiRoleDocumentRole | null>;
  DocDesc(): string;
  OnInit(): void;
};
