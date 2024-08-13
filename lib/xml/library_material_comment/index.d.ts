type LibraryMaterialCommentDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: LibraryMaterialCommentDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  is_admin_approved: XmlElem<boolean>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  user_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date | null>;
  parent_object_id: XmlElem<number | null, LibraryMaterialCommentCatalogDocumentTopElem>;
  how2show: XmlElem<string | null>;
  last_create_date: XmlElem<Date | null>;
  is_closed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialCommentDocument = XmlDocument & {
  TopElem: LibraryMaterialCommentDocumentTopElem;
  library_material_comment: LibraryMaterialCommentDocumentTopElem;
  DocDesc(): string;
};
