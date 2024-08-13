type OutstaffProviderDocumentTopElem = XmlTopElem &
OrgBase &
AdminAccessBase &
FileListBase &
DocumentPersonsBase &
CustomElemsBase & {
  Doc: OutstaffProviderDocument;
  access: XmlElem<AccessDocBase | null>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffProviderDocument = XmlDocument & {
  TopElem: OutstaffProviderDocumentTopElem;
  outstaff_provider: OutstaffProviderDocumentTopElem;
  DocDesc(): string;
};
