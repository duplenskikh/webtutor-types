type ObjectiveTranslateDocumentTopElem = XmlTopElem & {
  Doc: ObjectiveTranslateDocument;
  code: XmlElem<string | null>;
  assessment_appraise_id: XmlElem<number | null, AssessmentAppraiseCatalogDocumentTopElem>;
  translator_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  translator_person_fullname: XmlElem<string | null>;
  translator_objective_id: XmlElem<string | null>;
  translator_objective_name: XmlElem<string | null>;
  translator_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  recipient_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  recipient_person_fullname: XmlElem<string | null>;
  recipient_objective_id: XmlElem<string | null>;
  recipient_objective_name: XmlElem<string | null>;
  recipient_pa_id: XmlElem<number | null, PaCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectiveTranslateDocument = XmlDocument & {
  TopElem: ObjectiveTranslateDocumentTopElem;
  objective_translate: ObjectiveTranslateDocumentTopElem;
  DocDesc(): string;
};
