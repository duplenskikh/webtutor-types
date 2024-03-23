type OutstaffProviderDocumentTopElem = XmlTopElem &
OrgBase &
AdminAccessBase &
FileListBase &
DocumentPersonsBase &
CustomElemsBase & {
  Doc: OutstaffProviderDocument;
  access: XmlElem<AccessDocBase>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type OutstaffProviderDocument = XmlDocument & {
  TopElem: OutstaffProviderDocumentTopElem;
  outstaff_provider: OutstaffProviderDocumentTopElem;
  DocDesc(): string;
};
