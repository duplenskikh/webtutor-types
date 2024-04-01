type ViewApplicationActionsDocumentTopElem = XmlTopElem & {
  Doc: ViewApplicationActionsDocument;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
};

type ViewApplicationActionsDocument = XmlDocument & {
  TopElem: ViewApplicationActionsDocumentTopElem;
  view_application_actions: ViewApplicationActionsDocumentTopElem;
};
