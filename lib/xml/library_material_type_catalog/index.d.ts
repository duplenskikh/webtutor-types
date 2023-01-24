type LibraryMaterialTypeCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialTypeCatalogDocument = XmlDocument & { TopElem: LibraryMaterialTypeCatalogDocumentTopElem; };
