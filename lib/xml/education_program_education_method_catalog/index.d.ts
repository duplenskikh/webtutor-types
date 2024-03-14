type EducationProgramEducationMethodCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  education_program_id: XmlElem<number, EducationProgramCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  education_method_name: XmlElem<string>;
  cost: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  cost_type: XmlElem<string, typeof common.cost_types>;
  duration: XmlElem<number>;
  person_num: XmlElem<number>;
  type: XmlElem<string, typeof common.education_method_types>;
  is_open: XmlElem<boolean>;
  duration_days: XmlElem<number>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};
