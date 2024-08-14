type LibraryMaterialFormatDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialFormatDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  format_type_id: XmlElem<string | null, typeof common.material_format_types>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialFormatDocument = XmlDocument & {
  TopElem: LibraryMaterialFormatDocumentTopElem;
  library_material_format: LibraryMaterialFormatDocumentTopElem;
  DocDesc(): string;
};
