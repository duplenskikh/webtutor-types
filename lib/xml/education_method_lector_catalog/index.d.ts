type EducationMethodLectorCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase & {
  id: XmlElem<number>;
  education_method_id: XmlElem<number, EducationMethodCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.education_method_types>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  is_open: XmlElem<boolean>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  duration_days: XmlElem<number>;
  person_num: XmlElem<number>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
