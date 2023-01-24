type VacancyTypeCatalogDocumentTopElem = XmlTopElem & { Doc: VacancyTypeCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type VacancyTypeCatalogDocument = XmlDocument & { TopElem: VacancyTypeCatalogDocumentTopElem; };
