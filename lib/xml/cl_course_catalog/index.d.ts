type ClCourseCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  author_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  localization_id: XmlMultiElemObject<number, ClLocalizationCatalogDocumentTopElem>;
  tag_id: XmlMultiElemObject<number, TagCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  platform: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
