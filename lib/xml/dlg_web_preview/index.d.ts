type DlgWebPreviewDocumentTopElem = XmlTopElem & {
  Doc: DlgWebPreviewDocument;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  document_id: XmlElem<number>;
  url: XmlElem<string>;
};

type DlgWebPreviewDocument = XmlDocument & {
  TopElem: DlgWebPreviewDocumentTopElem;
  dlg_web_preview: DlgWebPreviewDocumentTopElem;
};
