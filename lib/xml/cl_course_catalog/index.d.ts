type ClCourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  author_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  localization_id: XmlMultiElemObject<number | null, ClLocalizationCatalogDocumentTopElem>;
  tag_id: XmlMultiElemObject<number | null, TagCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  platform: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
