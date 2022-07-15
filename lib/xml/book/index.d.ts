interface BookTopElem extends XmlTopElem<BookDocument>, KnowledgePartsBase, KnowledgePartsBaseOld, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  library_section_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type BookDocument = XmlDocument<BookTopElem>;
