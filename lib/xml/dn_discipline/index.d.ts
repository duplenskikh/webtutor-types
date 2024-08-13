interface DnDisciplineDocumentDiscBlock {
  block_id: XmlElem<number | null, DnDisciplineBlockCatalogDocumentTopElem>;
}

type DnDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  faculty_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  disc_blocks: XmlMultiElem<DnDisciplineDocumentDiscBlock | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnDisciplineDocument = XmlDocument & {
  TopElem: DnDisciplineDocumentTopElem;
  dn_discipline: DnDisciplineDocumentTopElem;
  DocDesc(): string;
};
