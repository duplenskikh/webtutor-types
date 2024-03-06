type DnSpecialDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecialDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  facult_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnSpecialDocument = XmlDocument & {
  TopElem: DnSpecialDocumentTopElem;
  dn_special: DnSpecialDocumentTopElem;
  DocDesc(): unknown;
};
