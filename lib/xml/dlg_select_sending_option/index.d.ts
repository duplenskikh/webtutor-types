type DlgSelectSendingOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectSendingOptionDocument;
  collabor_count: XmlElem<number>;
  collabor_notif_count: XmlElem<number>;
  send_type: XmlElem<string>;
  show_not_send: XmlElem<boolean>;
};

type DlgSelectSendingOptionDocument = XmlDocument & {
  TopElem: DlgSelectSendingOptionDocumentTopElem;
  dlg_select_sending_option: DlgSelectSendingOptionDocumentTopElem;
};
