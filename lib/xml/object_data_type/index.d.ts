type ObjectDataTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  Doc: ObjectDataTypeDocument;
  /** Тип объекта */
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type ObjectDataTypeDocument = XmlDocument & {
  TopElem: ObjectDataTypeDocumentTopElem;
  object_data_type: ObjectDataTypeDocumentTopElem;
  DocDesc(): string;
};
