type ParticipantCatalogDocumentTopElem = XmlTopElem & { Doc: ParticipantCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  work_name: XmlElem<string>;
  contest_id: XmlElem<number>;
  contest_name: XmlElem<string>;
  person_id: XmlElem<number>;
  rating: XmlElem<number>;
  place: XmlElem<number>;
  status_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ParticipantCatalogDocument = XmlDocument & { TopElem: ParticipantCatalogDocumentTopElem; };
