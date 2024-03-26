type LibrarySectionCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
  position: XmlElem<number>;
  link: XmlElem<string>;
  external_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
