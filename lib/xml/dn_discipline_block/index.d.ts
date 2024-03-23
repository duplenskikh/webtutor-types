interface DnDisciplineBlockDocumentDiscipline {
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
}

type DnDisciplineBlockDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnDisciplineBlockDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disciplines: XmlMultiElem<DnDisciplineBlockDocumentDiscipline>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnDisciplineBlockDocument = XmlDocument & {
  TopElem: DnDisciplineBlockDocumentTopElem;
  dn_discipline_block: DnDisciplineBlockDocumentTopElem;
  DocDesc(): string;
};
