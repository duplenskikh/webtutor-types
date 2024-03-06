type StaffPositionStartDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionStartDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  position_date: XmlElem<Date>;
  document: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StaffPositionStartDocument = XmlDocument & {
  TopElem: StaffPositionStartDocumentTopElem;
  staff_position_start: StaffPositionStartDocumentTopElem;
  DocDesc(): unknown;
};
