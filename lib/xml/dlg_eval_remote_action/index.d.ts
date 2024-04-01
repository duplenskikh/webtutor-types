type DlgEvalRemoteActionDocumentTopElem = XmlTopElem & {
  Doc: DlgEvalRemoteActionDocument;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  remote_action_obj: XmlElem<unknown>;
  params_obj: XmlElem<unknown>;
  top_elem_obj: XmlElem<unknown>;
  screen_obj: XmlElem<unknown>;
};

type DlgEvalRemoteActionDocument = XmlDocument & {
  TopElem: DlgEvalRemoteActionDocumentTopElem;
  dlg_eval_remote_action: DlgEvalRemoteActionDocumentTopElem;
};
