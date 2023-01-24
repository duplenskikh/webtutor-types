type QualificationAssignmentCatalogDocumentTopElem = XmlTopElem & { Doc: QualificationAssignmentCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  assignment_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
  status: XmlElem<string>;
  qualification_id: XmlElem<number>;
  person_id: XmlElem<number>;
  reason: XmlElem<string>;
  event_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QualificationAssignmentCatalogDocument = XmlDocument & { TopElem: QualificationAssignmentCatalogDocumentTopElem; };
