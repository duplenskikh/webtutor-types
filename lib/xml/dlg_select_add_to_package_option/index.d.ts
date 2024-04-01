type DlgSelectAddToPackageOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectAddToPackageOptionDocument;
  object_id: XmlElem<number>;
  multi_select: XmlElem<boolean>;
  apply_for_all_objects: XmlElem<boolean>;
  show_add_files: XmlElem<boolean>;
  show_add_role_id: XmlElem<boolean>;
  add_foreign_elem_objects: XmlElem<boolean>;
  add_files: XmlElem<boolean>;
  add_role_id: XmlElem<boolean>;
  add_sections: XmlElem<boolean>;
};

type DlgSelectAddToPackageOptionDocument = XmlDocument & {
  TopElem: DlgSelectAddToPackageOptionDocumentTopElem;
  dlg_select_add_to_package_option: DlgSelectAddToPackageOptionDocumentTopElem;
};
