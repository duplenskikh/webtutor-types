type LibrarySectionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_object_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  link: XmlElem<string | null>;
  external_id: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
