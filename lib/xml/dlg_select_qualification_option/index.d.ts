type DlgSelectQualificationOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectQualificationOptionDocument;
  use_position_common: XmlElem<boolean>;
  unconditional_assignment: XmlElem<boolean>;
  assign_new: XmlElem<boolean>;
  assignment: XmlElem<boolean>;
};

type DlgSelectQualificationOptionDocument = XmlDocument & {
  TopElem: DlgSelectQualificationOptionDocumentTopElem;
  dlg_select_qualification_option: DlgSelectQualificationOptionDocumentTopElem;
};
