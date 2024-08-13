type ObjectDataTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ObjectDataTypeDocument;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type ObjectDataTypeDocument = XmlDocument & {
  TopElem: ObjectDataTypeDocumentTopElem;
  object_data_type: ObjectDataTypeDocumentTopElem;
  DocDesc(): string;
};
