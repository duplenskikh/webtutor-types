interface EducationMethodDocumentEventForm {
  form_id: XmlElem<string>;
}

interface EducationMethodDocumentCompetenceIndicator {
  indicator_id: XmlElem<number>;
  plan: XmlElem<string>;
  required_mark: XmlElem<string>;
  weight: XmlElem<number>;
}

interface EducationMethodDocumentCompetence {
  competence_id: XmlElem<number>;
  plan: XmlElem<string>;
  required_mark: XmlElem<string>;
  weight: XmlElem<number>;
  indicators: XmlMultiElem<EducationMethodDocumentCompetenceIndicator>;
}

interface EducationMethodDocumentSimilarEducationMethod {
  id: XmlElem<number>;
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
  id: XmlElem<number>;
  code: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  is_open: XmlElem<boolean>;
  default_request_type_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  default_response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  certificate_type_id: XmlElem<number, CertificateCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  event_form: XmlElem<string, typeof lists.event_forms>;
  event_type_id: XmlElem<number, EventTypeCatalogDocumentTopElem>;
  event_forms: XmlMultiElem<EducationMethodDocumentEventForm>;
  competences: XmlMultiElem<EducationMethodDocumentCompetence>;
  similar_education_methods: XmlMultiElem<EducationMethodDocumentSimilarEducationMethod>;
  get_workflow_id(): number;
  role_id: XmlMultiElem<number>;
}

type EducationMethodDocument = XmlDocument & {
  TopElem: EducationMethodDocumentTopElem;
};
