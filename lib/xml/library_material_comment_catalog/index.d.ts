type LibraryMaterialCommentCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialCommentCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialCommentCatalogDocument = XmlDocument & { TopElem: LibraryMaterialCommentCatalogDocumentTopElem; };
