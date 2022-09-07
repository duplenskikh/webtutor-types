type PlaceDocumentTopElem = XmlTopElem & { Doc: PlaceDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  region_id: XmlElem<number>;
  timezone_id: XmlElem<number>;
  address: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type PlaceDocument = XmlDocument & { TopElem: PlaceDocumentTopElem; };
