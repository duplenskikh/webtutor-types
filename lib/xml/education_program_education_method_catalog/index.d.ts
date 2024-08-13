type EducationProgramEducationMethodCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  education_program_id: XmlElem<number | null, EducationProgramCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  education_method_name: XmlElem<string | null>;
  cost: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  cost_type: XmlElem<string | null, typeof common.cost_types>;
  duration: XmlElem<number | null>;
  person_num: XmlElem<number | null>;
  type: XmlElem<string, typeof common.education_method_types>;
  is_open: XmlElem<boolean>;
  duration_days: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
