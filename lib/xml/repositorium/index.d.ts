interface RepositoriumAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface RepositoriumTopElem extends XmlTopElem<RepositoriumDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase {
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  authors?: XmlMultiElem<RepositoriumAuthor>;
  access?: XmlElem<AccessDocBase>;
}

type RepositoriumDocument = XmlDocument<RepositoriumTopElem>;
