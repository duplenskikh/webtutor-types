interface OutstaffProviderTopElem extends XmlTopElem<OutstaffProviderDocument>, OrgBase, AdminAccessBase, FileListBase, DocumentPersonsBase, CustomElemsBase {
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  collaborator_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type OutstaffProviderDocument = XmlDocument<OutstaffProviderTopElem>;
