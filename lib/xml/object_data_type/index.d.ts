type ObjectDataTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ObjectDataTypeDocument;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  disp_block: XmlElem<MsDispBlockBase>;
  role_id: XmlMultiElemObject<number>;
};

type ObjectDataTypeDocument = XmlDocument & {
  TopElem: ObjectDataTypeDocumentTopElem;
  object_data_type: ObjectDataTypeDocumentTopElem;
  DocDesc(): string;
};
