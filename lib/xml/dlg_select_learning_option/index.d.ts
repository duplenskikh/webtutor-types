type DlgSelectLearningOptionDocumentTopElem = XmlTopElem &
SelectLearningOptionBase & {
  Doc: DlgSelectLearningOptionDocument;
  learning_type: XmlElem<string>;
  learning_name: XmlElem<string>;
  learning_id: XmlElem<number>;
  multi_select: XmlElem<boolean>;
  apply_for_all_learnings: XmlElem<boolean>;
};

type DlgSelectLearningOptionDocument = XmlDocument & {
  TopElem: DlgSelectLearningOptionDocumentTopElem;
  dlg_select_learning_option: DlgSelectLearningOptionDocumentTopElem;
};
