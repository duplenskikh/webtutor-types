type StaffPositionFinishDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionFinishDocument;
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
  position_finish_date: XmlElem<Date | null>;
  document: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type StaffPositionFinishDocument = XmlDocument & {
  TopElem: StaffPositionFinishDocumentTopElem;
  staff_position_finish: StaffPositionFinishDocumentTopElem;
  DocDesc(): string;
};
