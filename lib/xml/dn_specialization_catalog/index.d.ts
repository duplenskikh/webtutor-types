type DnSpecializationCatalogDocumentTopElem = XmlTopElem & { Doc: DnSpecializationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  speciality_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnSpecializationCatalogDocument = XmlDocument & { TopElem: DnSpecializationCatalogDocumentTopElem; };
