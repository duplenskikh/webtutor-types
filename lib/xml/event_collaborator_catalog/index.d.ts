type EventCollaboratorCatalogDocumentTopElem = XmlTopElem &
EventCatalogBase & {
  id: XmlElem<number | null>;
  event_id: XmlElem<number | null, EventCatalogDocumentTopElem>;
  is_public: XmlElem<boolean | null>;
  is_open: XmlElem<boolean | null>;
  is_model: XmlElem<boolean>;
  duration_fact: XmlElem<number | null>;
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  is_collaborator: XmlElem<boolean | null>;
  is_tutor: XmlElem<boolean | null>;
  is_preparation: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
