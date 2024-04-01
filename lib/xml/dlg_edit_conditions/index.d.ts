type DlgEditConditionsDocumentTopElem = XmlTopElem &
ConditionsBase &
WorkflowFieldsStatesBase & {
  Doc: DlgEditConditionsDocument;
};

type DlgEditConditionsDocument = XmlDocument & {
  TopElem: DlgEditConditionsDocumentTopElem;
  dlg_edit_conditions: DlgEditConditionsDocumentTopElem;
};
