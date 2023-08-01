type LibraryMaterialCommentDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialCommentDocument } &
FileListBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_admin_approved: XmlElem<boolean>;
  material_id: XmlElem<number>;
  user_id: XmlElem<number>;
  create_date: XmlElem<Date>;
  parent_object_id: XmlElem<number>;
  how2show: XmlElem<string>;
  last_create_date: XmlElem<Date>;
  is_closed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialCommentDocument = XmlDocument & {
  TopElem: LibraryMaterialCommentDocumentTopElem;
};
