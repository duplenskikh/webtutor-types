interface DnDisciplineBlockDocumentDiscipline {
  discipline_id: XmlElem<number>;
}

type DnDisciplineBlockDocumentTopElem = XmlTopElem & { Doc: DnDisciplineBlockDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  disciplines: XmlMultiElem<DnDisciplineBlockDocumentDiscipline>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnDisciplineBlockDocument = XmlDocument & { TopElem: DnDisciplineBlockDocumentTopElem; };
