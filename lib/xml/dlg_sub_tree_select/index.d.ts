type DlgSubTreeSelectDocumentTopElem = XmlTopElem & {
  Doc: DlgSubTreeSelectDocument;
  cur_object_id: XmlElem<number>;
  object_id: XmlElem<number>;
  org_id: XmlElem<number>;
  object_type: XmlElem<string>;
  filter: XmlElem<AuFtFilter>;
};

type DlgSubTreeSelectDocument = XmlDocument & {
  TopElem: DlgSubTreeSelectDocumentTopElem;
  dlg_sub_tree_select: DlgSubTreeSelectDocumentTopElem;
};
