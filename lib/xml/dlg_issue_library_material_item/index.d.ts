type DlgIssueLibraryMaterialItemDocumentTopElem = XmlTopElem & {
  Doc: DlgIssueLibraryMaterialItemDocument;
  title: XmlElem<string>;
  edit_mode: XmlElem<boolean>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
};

type DlgIssueLibraryMaterialItemDocument = XmlDocument & {
  TopElem: DlgIssueLibraryMaterialItemDocumentTopElem;
  dlg_issue_library_material_item: DlgIssueLibraryMaterialItemDocumentTopElem;
};
