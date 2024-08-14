interface DnStreamDocumentStudGroup {
  group_id: XmlElem<number | null, DnStudGroupCatalogDocumentTopElem>;
}

type DnStreamDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnStreamDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  stud_groups: XmlMultiElem<DnStreamDocumentStudGroup | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnStreamDocument = XmlDocument & {
  TopElem: DnStreamDocumentTopElem;
  dn_stream: DnStreamDocumentTopElem;
  DocDesc(): string;
};
