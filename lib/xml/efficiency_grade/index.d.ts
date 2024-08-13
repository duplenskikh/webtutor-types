type EfficiencyGradeDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: EfficiencyGradeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  assessment_source: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  successor_id: XmlElem<number | null, SuccessorCatalogDocumentTopElem>;
  personnel_reserve_id: XmlElem<number | null, PersonnelReserveCatalogDocumentTopElem>;
  assessor_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  assessment_date: XmlElem<Date | null>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type EfficiencyGradeDocument = XmlDocument & {
  TopElem: EfficiencyGradeDocumentTopElem;
  efficiency_grade: EfficiencyGradeDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
