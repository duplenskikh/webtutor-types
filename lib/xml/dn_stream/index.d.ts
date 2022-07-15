interface DnStreamStudGroup {
  group_id?: XmlElem<number>;
}

interface DnStreamTopElem extends XmlTopElem<DnStreamDocument>, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  stud_groups?: XmlMultiElem<DnStreamStudGroup>;
}

type DnStreamDocument = XmlDocument<DnStreamTopElem>;
