type OutstaffProviderDocumentTopElem = XmlTopElem & { Doc: OutstaffProviderDocument } & 
  OrgBase &
  AdminAccessBase &
  FileListBase &
  DocumentPersonsBase &
  CustomElemsBase & {
  access: XmlElem<AccessDocBase>;
  place_id: XmlElem<number>;
  region_id: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type OutstaffProviderDocument = XmlDocument & { TopElem: OutstaffProviderDocumentTopElem; };
