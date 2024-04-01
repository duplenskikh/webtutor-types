type DlgEditListCompetenceDocumentTopElem = XmlTopElem & {
  Doc: DlgEditListCompetenceDocument;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  plan: XmlElem<string>;
  weight: XmlElem<number>;
  is_new: XmlElem<boolean>;
  xquery_qual: XmlElem<string>;
};

type DlgEditListCompetenceDocument = XmlDocument & {
  TopElem: DlgEditListCompetenceDocumentTopElem;
  dlg_edit_list_competence: DlgEditListCompetenceDocumentTopElem;
};
