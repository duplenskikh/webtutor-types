type StaffPositionMoveDocumentTopElem = XmlTopElem & { Doc: StaffPositionMoveDocument } &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string>;
  move_subdivision_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string>;
  move_position_id: XmlElem<number, PositionCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  move_staff_position_id: XmlElem<number, StaffPositionCatalogDocumentTopElem>;
  move_date: XmlElem<Date>;
  document: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StaffPositionMoveDocument = XmlDocument & {
  TopElem: StaffPositionMoveDocumentTopElem;
};
