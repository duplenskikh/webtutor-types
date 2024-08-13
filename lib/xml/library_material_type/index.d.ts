type LibraryMaterialTypeDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialTypeDocumentTopElem;
  library_material_type: LibraryMaterialTypeDocumentTopElem;
  DocDesc(): string;
};
