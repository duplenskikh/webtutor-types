interface DnBlockDisciplineDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

type DnBlockDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnBlockDisciplineDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnBlockDisciplineDocumentDiscipline | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnBlockDisciplineDocument = XmlDocument & {
  TopElem: DnBlockDisciplineDocumentTopElem;
  dn_block_discipline: DnBlockDisciplineDocumentTopElem;
  DocDesc(): string;
};
