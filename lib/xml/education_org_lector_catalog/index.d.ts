type EducationOrgLectorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  education_org_id: XmlElem<number, EducationOrgCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  disp_name: XmlElem<string>;
  is_provider_courses: XmlElem<boolean>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
