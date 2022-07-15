interface EducationModeTopElem extends XmlTopElem<EducationModeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type EducationModeDocument = XmlDocument<EducationModeTopElem>;
