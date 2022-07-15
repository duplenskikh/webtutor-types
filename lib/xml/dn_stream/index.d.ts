interface DnStreamStudGroup {
  group_id?: XmlElem<number>;
}

interface DnStreamViewFilter extends AuFtFilter {
}

interface DnStreamView extends DescBase {
  filter?: XmlElem<DnStreamViewFilter>;
}

interface DnStreamTopElem extends XmlTopElem<DnStreamDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  stud_groups?: XmlMultiElem<DnStreamStudGroup>;
  view?: XmlElem<DnStreamView>;
}

type DnStreamDocument = XmlDocument<DnStreamTopElem>;
