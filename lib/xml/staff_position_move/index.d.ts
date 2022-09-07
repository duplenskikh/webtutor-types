type StaffPositionMoveDocumentTopElem = XmlTopElem & { Doc: StaffPositionMoveDocument } & 
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
  move_subdivision_id: XmlElem<number>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  move_position_id: XmlElem<number>;
  staff_position_id: XmlElem<number>;
  move_staff_position_id: XmlElem<number>;
  move_date: XmlElem<Date>;
  document: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type StaffPositionMoveDocument = XmlDocument & { TopElem: StaffPositionMoveDocumentTopElem; };
