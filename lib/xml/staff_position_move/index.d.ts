type StaffPositionMoveDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionMoveDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  move_subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  move_position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  move_staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  move_date: XmlElem<Date | null>;
  document: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionMoveDocument = XmlDocument & {
  TopElem: StaffPositionMoveDocumentTopElem;
  staff_position_move: StaffPositionMoveDocumentTopElem;
  DocDesc(): string;
};
