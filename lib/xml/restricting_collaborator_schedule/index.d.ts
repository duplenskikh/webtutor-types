type RestrictingCollaboratorScheduleDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: RestrictingCollaboratorScheduleDocument;
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  restriction_type_id: XmlElem<number, RestrictingTypeCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.agreement_status_types>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type RestrictingCollaboratorScheduleDocument = XmlDocument & {
  TopElem: RestrictingCollaboratorScheduleDocumentTopElem;
  restricting_collaborator_schedule: RestrictingCollaboratorScheduleDocumentTopElem;
};
