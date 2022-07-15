interface DnDisciplineBlockDiscipline {
  discipline_id?: XmlElem<number>;
}

interface DnDisciplineBlockTopElem extends XmlTopElem<DnDisciplineBlockDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  disciplines?: XmlMultiElem<DnDisciplineBlockDiscipline>;
}

type DnDisciplineBlockDocument = XmlDocument<DnDisciplineBlockTopElem>;
