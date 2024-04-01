interface DlgFindSectionDocumentSection {
  id: XmlElem<string>;
  title: XmlElem<string>;
  href: XmlElem<string>;
  block: XmlElem<string>;
}

type DlgFindSectionDocumentTopElem = XmlTopElem & {
  Doc: DlgFindSectionDocument;
  search_string: XmlElem<string>;
  sections: XmlMultiElem<DlgFindSectionDocumentSection>;
};

type DlgFindSectionDocument = XmlDocument & {
  TopElem: DlgFindSectionDocumentTopElem;
  dlg_find_section: DlgFindSectionDocumentTopElem;
};
