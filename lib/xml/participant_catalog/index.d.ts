type ParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  work_name: XmlElem<string>;
  contest_id: XmlElem<number, ContestCatalogDocumentTopElem>;
  contest_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  rating: XmlElem<number>;
  place: XmlElem<number>;
  status_id: XmlElem<string, typeof common.participant_states>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
