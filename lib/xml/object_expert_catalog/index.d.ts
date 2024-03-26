type ObjectExpertCatalogDocumentTopElem = XmlTopElem &
ObjectTypeBase & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  type: XmlElem<string, typeof common.course_expert_types>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
