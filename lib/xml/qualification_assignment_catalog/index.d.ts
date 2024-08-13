type QualificationAssignmentCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  assignment_date: XmlElem<Date | null>;
  expiration_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number | null, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  sender_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  reason: XmlElem<string | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
