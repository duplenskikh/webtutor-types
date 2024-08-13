type BlogAuthorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  blog_id: XmlElem<number | null, BlogCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  person_id: XmlElem<string | null>;
  person_fullname: XmlElem<string | null>;
  is_full_moderator: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
