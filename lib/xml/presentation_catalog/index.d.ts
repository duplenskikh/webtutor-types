type PresentationCatalogDocumentTopElem = XmlTopElem & { Doc: PresentationCatalogDocument } & 
ObjectCodeNameBase & {
  file_id: XmlElem<number>;
  event_id: XmlElem<number>;
  vclass_setting_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
}

type PresentationCatalogDocument = XmlDocument & { TopElem: PresentationCatalogDocumentTopElem; };
