type AdminAccessCatalogCatalogDocumentTopElem = XmlTopElem &
AdminAccessCatalogBase & {
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  social: XmlElem<SocialObjectAccessBase>;
};
