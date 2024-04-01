interface DlgSelectAnswerDocumentAnswer {
  name: XmlElem<string>;
  text: XmlElem<string>;
  checked: XmlElem<boolean>;
}

type DlgSelectAnswerDocumentTopElem = XmlTopElem & {
  Doc: DlgSelectAnswerDocument;
  answer_index: XmlElem<number>;
  title: XmlElem<string>;
  text: XmlElem<string>;
  multi_select: XmlElem<boolean>;
  answers: XmlMultiElem<DlgSelectAnswerDocumentAnswer>;
  add_answer(text: string, name: string, checked: boolean): unknown;
};

type DlgSelectAnswerDocument = XmlDocument & {
  TopElem: DlgSelectAnswerDocumentTopElem;
  dlg_select_answer: DlgSelectAnswerDocumentTopElem;
};
