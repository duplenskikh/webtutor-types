interface CatalogsDocumentCatalog {
  name: XmlElem<string, typeof common.exchange_object_types>;
  max_records_num: XmlElem<number>;
}

interface CatalogsDocumentAccessBlockType {
  id: XmlElem<string, typeof common.access_block_types>;
}

type CatalogCatalogDocumentTopElem = XmlTopElem & {
  catalogs: XmlMultiElem<CatalogsDocumentCatalog>;
  access_block_types: XmlMultiElem<CatalogsDocumentAccessBlockType>;
};
