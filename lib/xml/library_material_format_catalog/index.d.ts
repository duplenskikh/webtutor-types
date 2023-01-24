type LibraryMaterialFormatCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialFormatCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  format_type_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialFormatCatalogDocument = XmlDocument & { TopElem: LibraryMaterialFormatCatalogDocumentTopElem; };
