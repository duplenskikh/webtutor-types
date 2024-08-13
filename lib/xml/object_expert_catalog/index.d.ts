type ObjectExpertCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  type: XmlElem<string, typeof common.course_expert_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
