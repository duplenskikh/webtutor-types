interface DnDisciplineBlockDiscipline {
  discipline_id?: XmlElem<number>;
}

interface DnDisciplineBlockViewFilter extends AuFtFilter {
}

interface DnDisciplineBlockView extends DescBase {
  filter?: XmlElem<DnDisciplineBlockViewFilter>;
}

interface DnDisciplineBlockTopElem extends XmlTopElem<DnDisciplineBlockDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disciplines?: XmlMultiElem<DnDisciplineBlockDiscipline>;
  view?: XmlElem<DnDisciplineBlockView>;
}

type DnDisciplineBlockDocument = XmlDocument<DnDisciplineBlockTopElem>;
