interface DnDisciplineDocumentDiscBlock {
  block_id: XmlElem<number>;
}

type DnDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  disc_blocks: XmlMultiElem<DnDisciplineDocumentDiscBlock>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnDisciplineDocument = XmlDocument & {
  TopElem: DnDisciplineDocumentTopElem;
};
