type QualificationAssignmentCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  assignment_date: XmlElem<Date>;
  expiration_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.qualification_assignment_states>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  sender_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  competence_id: XmlElem<number, CompetenceCatalogDocumentTopElem>;
  reason: XmlElem<string>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  is_reward: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
