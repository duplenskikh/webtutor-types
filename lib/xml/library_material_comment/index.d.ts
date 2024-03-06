type LibraryMaterialCommentDocumentTopElem = XmlTopElem &
FileListBase & {
  Doc: LibraryMaterialCommentDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_admin_approved: XmlElem<boolean>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  user_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  parent_object_id: XmlElem<number, LibraryMaterialCommentCatalogDocumentTopElem>;
  how2show: XmlElem<string>;
  last_create_date: XmlElem<Date>;
  is_closed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialCommentDocument = XmlDocument & {
  TopElem: LibraryMaterialCommentDocumentTopElem;
  library_material_comment: LibraryMaterialCommentDocumentTopElem;
  DocDesc(): unknown;
};
