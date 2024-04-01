type DlgEditProgramMethodDocumentTopElem = XmlTopElem &
ProgramMethodBase & {
  Doc: DlgEditProgramMethodDocument;
};

type DlgEditProgramMethodDocument = XmlDocument & {
  TopElem: DlgEditProgramMethodDocumentTopElem;
  dlg_edit_program_method: DlgEditProgramMethodDocumentTopElem;
};
