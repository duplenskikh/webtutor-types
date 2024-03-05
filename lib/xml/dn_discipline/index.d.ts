interface DnDisciplineDocumentDiscBlock {
  block_id: XmlElem<number, DnDisciplineBlockCatalogDocumentTopElem>;
}

type DnDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  disc_blocks: XmlMultiElem<DnDisciplineDocumentDiscBlock>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnDisciplineDocument = XmlDocument & {
  TopElem: DnDisciplineDocumentTopElem;
};
