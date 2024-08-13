interface DnBlockDisciplineDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

type DnBlockDisciplineDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnBlockDisciplineDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnBlockDisciplineDocumentDiscipline | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnBlockDisciplineDocument = XmlDocument & {
  TopElem: DnBlockDisciplineDocumentTopElem;
  dn_block_discipline: DnBlockDisciplineDocumentTopElem;
  DocDesc(): string;
};
