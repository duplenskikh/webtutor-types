interface DnBlockDisciplineDocumentDiscipline {
  discipline_id: XmlElem<number>;
}

type DnBlockDisciplineDocumentTopElem = XmlTopElem & { Doc: DnBlockDisciplineDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  disciplines: XmlMultiElem<DnBlockDisciplineDocumentDiscipline>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnBlockDisciplineDocument = XmlDocument & { TopElem: DnBlockDisciplineDocumentTopElem; };
