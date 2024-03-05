type LibraryMaterialFormatDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialFormatDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  format_type_id: XmlElem<string, typeof common.material_format_types>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialFormatDocument = XmlDocument & {
  TopElem: LibraryMaterialFormatDocumentTopElem;
};
