interface DnAuditoriumDocumentObjectResource {
  object_resource_id: XmlElem<number, ObjectResourceCatalogDocumentTopElem>;
}

type DnAuditoriumDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAuditoriumDocument;
  code: XmlElem<string>;
  number_places: XmlElem<string>;
  place_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  object_resources: XmlMultiElem<DnAuditoriumDocumentObjectResource>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnAuditoriumDocument = XmlDocument & {
  TopElem: DnAuditoriumDocumentTopElem;
  dn_auditorium: DnAuditoriumDocumentTopElem;
  DocDesc(): string;
};
