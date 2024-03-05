type PlaceDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: PlaceDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number, RegionCatalogDocumentTopElem>;
  timezone_id: XmlElem<number, typeof common.timezones>;
  address: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type PlaceDocument = XmlDocument & {
  TopElem: PlaceDocumentTopElem;
};
