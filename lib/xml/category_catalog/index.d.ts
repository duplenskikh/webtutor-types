interface CategorysDocumentCategory {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type CategoryCatalogDocumentTopElem = XmlTopElem & {
  category: XmlElem<CategorysDocumentCategory>;
};
