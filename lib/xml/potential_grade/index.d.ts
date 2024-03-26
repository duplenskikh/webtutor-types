type PotentialGradeDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase &
FileListBase & {
  Doc: PotentialGradeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  development_potential_id: XmlElem<number, DevelopmentPotentialCatalogDocumentTopElem>;
  assessment_source: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  successor_id: XmlElem<number, SuccessorCatalogDocumentTopElem>;
  personnel_reserve_id: XmlElem<number, PersonnelReserveCatalogDocumentTopElem>;
  assessor_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  assessment_date: XmlElem<Date>;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type PotentialGradeDocument = XmlDocument & {
  TopElem: PotentialGradeDocumentTopElem;
  potential_grade: PotentialGradeDocumentTopElem;
  DocDesc(): string;
  OnBeforeSave(): void;
};
