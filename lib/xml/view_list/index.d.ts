type ViewListDocumentTopElem = XmlTopElem & {
  Doc: ViewListDocument;
  list: XmlElem<string>;
  list_path: XmlElem<string>;
  filter: XmlElem<AuFtFilter>;
  list_obj: XmlElem<unknown>;
};

type ViewListDocument = XmlDocument & {
  TopElem: ViewListDocumentTopElem;
  view_list: ViewListDocumentTopElem;
  OnInit(): void;
};
