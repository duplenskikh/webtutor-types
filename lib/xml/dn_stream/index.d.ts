interface DnStreamDocumentStudGroup {
  group_id: XmlElem<number, DnStudGroupCatalogDocumentTopElem>;
}

type DnStreamDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStreamDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  stud_groups: XmlMultiElem<DnStreamDocumentStudGroup>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnStreamDocument = XmlDocument & {
  TopElem: DnStreamDocumentTopElem;
};
