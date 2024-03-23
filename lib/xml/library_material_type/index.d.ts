type LibraryMaterialTypeDocumentTopElem = XmlTopElem & {
  Doc: LibraryMaterialTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialTypeDocument = XmlDocument & {
  TopElem: LibraryMaterialTypeDocumentTopElem;
  library_material_type: LibraryMaterialTypeDocumentTopElem;
  DocDesc(): string;
};
