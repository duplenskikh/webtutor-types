type LibraryMaterialSourceTypeCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialSourceTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  is_active: XmlElem<boolean>;
  filenamemask: XmlElem<string>;
  library_player_id: XmlElem<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialSourceTypeCatalogDocument = XmlDocument & { TopElem: LibraryMaterialSourceTypeCatalogDocumentTopElem; };
