type LibraryMaterialFormatDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialFormatDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  format_type_id: XmlElem<string | null, typeof common.material_format_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialFormatDocument = XmlDocument & {
  TopElem: LibraryMaterialFormatDocumentTopElem;
  library_material_format: LibraryMaterialFormatDocumentTopElem;
  DocDesc(): string;
};
