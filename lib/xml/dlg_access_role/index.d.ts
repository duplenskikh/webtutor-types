type DlgAccessRoleDocumentTopElem = XmlTopElem &
AccessRoleBase & {
  Doc: DlgAccessRoleDocument;
  role_id: XmlElem<string>;
  disp_save_button: XmlElem<boolean>;
  read_only: XmlElem<boolean>;
};

type DlgAccessRoleDocument = XmlDocument & {
  TopElem: DlgAccessRoleDocumentTopElem;
  dlg_access_role: DlgAccessRoleDocumentTopElem;
};
