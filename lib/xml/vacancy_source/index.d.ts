interface VacancySourceView extends DescBase {
}

interface VacancySourceTopElem extends XmlTopElem<VacancySourceDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<VacancySourceView>;
}

type VacancySourceDocument = XmlDocument<VacancySourceTopElem>;
