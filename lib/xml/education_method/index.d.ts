interface EducationMethodDocumentEventForm {
  form_id: XmlElem<string | null, typeof lists.event_forms>;
}

interface EducationMethodDocumentCompetenceIndicator {
  indicator_id: XmlElem<number | null, IndicatorCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  /** Вес */
  weight: XmlElem<number>;
}

interface EducationMethodDocumentCompetence {
  competence_id: XmlElem<number | null, CompetenceCatalogDocumentTopElem>;
  /** Плановая величина */
  plan: XmlElem<string | null>;
  required_mark: XmlElem<string | null>;
  /** Вес */
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
  /** Код */
  code: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Является открытой учебной программой */
  is_open: XmlElem<boolean>;
  /** Тип заявки по умолчанию */
  default_request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  /** Тип отзыва по умолчанию */
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  /** Обязательное заполнение отзыва */
  mandatory_fill_response: XmlElem<boolean>;
  /** Тип сертификата по результатам прохождения тестирования */
  certificate_type_id: XmlElem<number | null, CertificateTypeCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  event_form: XmlElem<string | null, typeof lists.event_forms>;
  event_type_id: XmlElem<number | null, EventTypeCatalogDocumentTopElem>;
  /** Формы проведения */
  event_forms: XmlMultiElem<EducationMethodDocumentEventForm | null>;
  /** Компетенции */
  competences: XmlMultiElem<EducationMethodDocumentCompetence | null>;
  similar_education_methods: XmlMultiElem<EducationMethodDocumentSimilarEducationMethod | null>;
  get_workflow_id(): null;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type EducationMethodDocument = XmlDocument & {
  TopElem: EducationMethodDocumentTopElem;
  education_method: EducationMethodDocumentTopElem;
  DocDesc(): string;
};
