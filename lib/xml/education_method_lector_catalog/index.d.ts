type EducationMethodLectorCatalogDocumentTopElem = XmlTopElem &
CostCurrencyTypeBase & {
  id: XmlElem<number | null>;
  education_method_id: XmlElem<number | null, EducationMethodCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.education_method_types>;
  state_id: XmlElem<string, typeof common.education_method_states>;
  is_open: XmlElem<boolean>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  duration_days: XmlElem<number | null>;
  person_num: XmlElem<number | null>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
