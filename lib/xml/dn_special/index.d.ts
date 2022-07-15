interface DnSpecialView extends DescBase {
}

interface DnSpecialTopElem extends XmlTopElem<DnSpecialDocument>, FileListBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  facult_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnSpecialView>;
}

type DnSpecialDocument = XmlDocument<DnSpecialTopElem>;
