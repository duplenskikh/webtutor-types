type DnEducatFormCatalogDocumentTopElem = XmlTopElem & { Doc: DnEducatFormCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnEducatFormCatalogDocument = XmlDocument & { TopElem: DnEducatFormCatalogDocumentTopElem; };
