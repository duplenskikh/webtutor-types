type ObjectDataTypeDocumentTopElem = XmlTopElem & { Doc: ObjectDataTypeDocument } &
ObjectCodeNameBase & {
  object_type: XmlElem<string>;
  sec_object_type: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  role_id: XmlMultiElem<number>;
};

type ObjectDataTypeDocument = XmlDocument & {
  TopElem: ObjectDataTypeDocumentTopElem;
};
