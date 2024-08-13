type PlaceDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PlaceDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  timezone_id: XmlElem<number | null, typeof common.timezones>;
  address: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PlaceDocument = XmlDocument & {
  TopElem: PlaceDocumentTopElem;
  place: PlaceDocumentTopElem;
  DocDesc(): string;
};
