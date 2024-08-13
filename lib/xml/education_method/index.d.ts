interface EducationMethodDocumentEventForm {
  form_id: XmlElem<string | null, typeof lists.event_forms>;
}

interface EducationMethodDocumentCompetenceIndicator {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  weight: XmlElem<number>;
}

interface EducationMethodDocumentCompetence {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  weight: XmlElem<number>;
  indicators: XmlMultiElem<EducationMethodDocumentCompetenceIndicator | null>;
}

interface EducationMethodDocumentSimilarEducationMethod {
  id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
}

type EducationMethodDocumentTopElem = XmlTopElem &
ProgramMethodBase &
LectorsBase &
CustomElemsBase &
AdminAccessBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
EduMethodTestingBase &
FileListBase &
ExpenseDistributionBase &
GameBonusBase & {
  Doc: EducationMethodDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_open: XmlElem<boolean>;
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  event_forms: XmlMultiElem<EducationMethodDocumentEventForm | null>;
  competences: XmlMultiElem<EducationMethodDocumentCompetence | null>;
  similar_education_methods: XmlMultiElem<EducationMethodDocumentSimilarEducationMethod | null>;
  get_workflow_id(): null;
  role_id: XmlMultiElemObject<number | null>;
};

type EducationMethodDocument = XmlDocument & {
  TopElem: EducationMethodDocumentTopElem;
  education_method: EducationMethodDocumentTopElem;
  DocDesc(): string;
};
