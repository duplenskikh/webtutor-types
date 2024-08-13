type DnSpecialDocumentTopElem = XmlTopElem &
FileListBase &
CustomElemsBase & {
  Doc: DnSpecialDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  facult_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnSpecialDocument = XmlDocument & {
  TopElem: DnSpecialDocumentTopElem;
  dn_special: DnSpecialDocumentTopElem;
  DocDesc(): string;
};
