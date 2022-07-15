interface ProjectTypeTopElem extends XmlTopElem<ProjectTypeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type ProjectTypeDocument = XmlDocument<ProjectTypeTopElem>;
