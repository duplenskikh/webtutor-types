type ParticipantCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  work_name: XmlElem<string | null>;
  contest_id: XmlElem<number | null, ContestCatalogDocumentTopElem>;
  contest_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  rating: XmlElem<number | null>;
  place: XmlElem<number | null>;
  status_id: XmlElem<string | null, typeof common.participant_states>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
