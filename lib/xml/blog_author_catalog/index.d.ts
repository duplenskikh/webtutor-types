type BlogAuthorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  blog_id: XmlElem<number, BlogCatalogDocumentTopElem>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  person_id: XmlElem<string>;
  person_fullname: XmlElem<string>;
  is_full_moderator: XmlElem<boolean>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};
