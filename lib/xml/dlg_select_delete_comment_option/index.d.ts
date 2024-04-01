type DlgSelectDeleteCommentOptionDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectDeleteCommentOptionDocument;
  name: XmlElem<string>;
  delete_all: XmlElem<boolean>;
};

type DlgSelectDeleteCommentOptionDocument = XmlDocument & {
  TopElem: DlgSelectDeleteCommentOptionDocumentTopElem;
  dlg_select_delete_comment_option: DlgSelectDeleteCommentOptionDocumentTopElem;
};
