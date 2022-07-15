interface VacancyTypeTopElem extends XmlTopElem<VacancyTypeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type VacancyTypeDocument = XmlDocument<VacancyTypeTopElem>;
