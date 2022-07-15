interface DnBlockDisciplineDiscipline {
  discipline_id?: XmlElem<number>;
}

interface DnBlockDisciplineTopElem extends XmlTopElem<DnBlockDisciplineDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disciplines?: XmlMultiElem<DnBlockDisciplineDiscipline>;
}

type DnBlockDisciplineDocument = XmlDocument<DnBlockDisciplineTopElem>;
