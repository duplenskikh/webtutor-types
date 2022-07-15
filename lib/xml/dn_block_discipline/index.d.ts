interface DnBlockDisciplineDiscipline {
  discipline_id?: XmlElem<number>;
}

interface DnBlockDisciplineViewFilter extends AuFtFilter {
}

interface DnBlockDisciplineView {
  filter?: XmlElem<DnBlockDisciplineViewFilter>;
}

interface DnBlockDisciplineTopElem extends XmlTopElem<DnBlockDisciplineDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disciplines?: XmlMultiElem<DnBlockDisciplineDiscipline>;
  view?: XmlElem<DnBlockDisciplineView>;
}

type DnBlockDisciplineDocument = XmlDocument<DnBlockDisciplineTopElem>;
