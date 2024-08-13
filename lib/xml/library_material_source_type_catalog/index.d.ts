type LibraryMaterialSourceTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.resource_types>;
  is_active: XmlElem<boolean | null>;
  filenamemask: XmlElem<string | null>;
  library_player_id: XmlElem<number | null, LibraryPlayerCatalogDocumentTopElem>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
