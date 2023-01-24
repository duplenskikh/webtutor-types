type UiDataCatalogDocumentTopElem = XmlTopElem & { Doc: UiDataCatalogDocument } & 
ObjectTypeBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  data: XmlElem<string>;
}

type UiDataCatalogDocument = XmlDocument & { TopElem: UiDataCatalogDocumentTopElem; };
