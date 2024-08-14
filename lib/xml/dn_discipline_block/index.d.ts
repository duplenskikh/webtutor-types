interface DnDisciplineBlockDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

type DnDisciplineBlockDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineBlockDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnDisciplineBlockDocumentDiscipline | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnDisciplineBlockDocument = XmlDocument & {
  TopElem: DnDisciplineBlockDocumentTopElem;
  dn_discipline_block: DnDisciplineBlockDocumentTopElem;
  DocDesc(): string;
};
