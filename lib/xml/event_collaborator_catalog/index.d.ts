type EventCollaboratorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number>;
  event_id: XmlElem<number, EventCatalogDocumentTopElem>;
  is_public: XmlElem<boolean>;
  is_open: XmlElem<boolean>;
  is_model: XmlElem<boolean>;
  duration_fact: XmlElem<number>;
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  is_collaborator: XmlElem<boolean>;
  is_tutor: XmlElem<boolean>;
  is_preparation: XmlElem<boolean>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
