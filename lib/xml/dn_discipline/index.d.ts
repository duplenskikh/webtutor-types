interface DnDisciplineDiscBlock {
  block_id?: XmlElem<number>;
}

interface DnDisciplineViewFilter extends AuFtFilter {
}

interface DnDisciplineView extends DescBase {
  filter?: XmlElem<DnDisciplineViewFilter>;
}

interface DnDisciplineTopElem extends XmlTopElem<DnDisciplineDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  faculty_id?: XmlElem<number>;
  chair_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disc_blocks?: XmlMultiElem<DnDisciplineDiscBlock>;
  view?: XmlElem<DnDisciplineView>;
}

type DnDisciplineDocument = XmlDocument<DnDisciplineTopElem>;
