type LibraryMaterialSourceTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.resource_types>;
  is_active: XmlElem<boolean>;
  filenamemask: XmlElem<string>;
  library_player_id: XmlElem<number, LibraryPlayerCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};
