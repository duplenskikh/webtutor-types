type StaffPositionStartDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionStartDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  subdivision_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  subdivision_name: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  staff_position_id: XmlElem<number | null, StaffPositionCatalogDocumentTopElem>;
  position_date: XmlElem<Date | null>;
  document: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionStartDocument = XmlDocument & {
  TopElem: StaffPositionStartDocumentTopElem;
  staff_position_start: StaffPositionStartDocumentTopElem;
  DocDesc(): string;
};
