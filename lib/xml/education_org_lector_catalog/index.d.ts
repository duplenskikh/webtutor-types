type EducationOrgLectorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  education_org_id: XmlElem<number | null, EducationOrgCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  disp_name: XmlElem<string | null>;
  is_provider_courses: XmlElem<boolean>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
