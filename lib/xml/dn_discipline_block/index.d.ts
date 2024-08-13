interface DnDisciplineBlockDocumentDiscipline {
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
}

type DnDisciplineBlockDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineBlockDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  disciplines: XmlMultiElem<DnDisciplineBlockDocumentDiscipline | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnDisciplineBlockDocument = XmlDocument & {
  TopElem: DnDisciplineBlockDocumentTopElem;
  dn_discipline_block: DnDisciplineBlockDocumentTopElem;
  DocDesc(): string;
};
