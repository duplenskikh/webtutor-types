type DlgSelectGroupOptionDocumentTopElem = XmlTopElem &
EducGroupsBase & {
  Doc: DlgSelectGroupOptionDocument;
  educ_group_id: XmlElem<string>;
};

type DlgSelectGroupOptionDocument = XmlDocument & {
  TopElem: DlgSelectGroupOptionDocumentTopElem;
  dlg_select_group_option: DlgSelectGroupOptionDocumentTopElem;
};
