interface ProfessionalAreaTypeTopElem extends XmlTopElem<ProfessionalAreaTypeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type ProfessionalAreaTypeDocument = XmlDocument<ProfessionalAreaTypeTopElem>;
