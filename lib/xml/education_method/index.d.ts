interface EducationMethodDocumentEventForm {
  form_id?: XmlElem<string>;
}

interface EducationMethodDocumentCompetenceIndicator {
  indicator_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  required_mark?: XmlElem<string>;
  weight?: XmlElem<number>;
}
interface EducationMethodDocumentCompetence {
  competence_id?: XmlElem<number>;
  plan?: XmlElem<string>;
  required_mark?: XmlElem<string>;
  weight?: XmlElem<number>;
  indicators?: XmlMultiElem<EducationMethodDocumentCompetenceIndicator>;
}

interface EducationMethodDocumentSimilarEducationMethod {
  id?: XmlElem<number>;
}

type EducationMethodDocumentTopElem = XmlTopElem & { Doc: EducationMethodDocument } & 
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
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  is_open?: XmlElem<boolean>;
  default_request_type_id?: XmlElem<number>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  certificate_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  event_form?: XmlElem<string>;
  event_type_id?: XmlElem<number>;
  event_forms?: XmlMultiElem<EducationMethodDocumentEventForm>;
  competences?: XmlMultiElem<EducationMethodDocumentCompetence>;
  similar_education_methods?: XmlMultiElem<EducationMethodDocumentSimilarEducationMethod>;
  get_workflow_id?(): unknown;
  role_id?: XmlMultiElem<number>;
}

type EducationMethodDocument = XmlDocument & { TopElem: EducationMethodDocumentTopElem; };
