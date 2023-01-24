type StaffPositionMoveCatalogDocumentTopElem = XmlTopElem & { Doc: StaffPositionMoveCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  subdivision_id: XmlElem<number>;
  subdivision_name: XmlElem<string>;
  position_id: XmlElem<number>;
  position_name: XmlElem<string>;
  move_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StaffPositionMoveCatalogDocument = XmlDocument & { TopElem: StaffPositionMoveCatalogDocumentTopElem; };
