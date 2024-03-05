type StaffPositionFinishDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: StaffPositionFinishDocument;
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
  position_finish_date: XmlElem<Date>;
  document: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StaffPositionFinishDocument = XmlDocument & {
  TopElem: StaffPositionFinishDocumentTopElem;
};
