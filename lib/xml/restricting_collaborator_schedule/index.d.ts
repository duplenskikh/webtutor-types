type RestrictingCollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: RestrictingCollaboratorScheduleDocument;
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  restriction_type_id: XmlElem<number | null, RestrictingTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type RestrictingCollaboratorScheduleDocument = XmlDocument & {
  TopElem: RestrictingCollaboratorScheduleDocumentTopElem;
  restricting_collaborator_schedule: RestrictingCollaboratorScheduleDocumentTopElem;
};
