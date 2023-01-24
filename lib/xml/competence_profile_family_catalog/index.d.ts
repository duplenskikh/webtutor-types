type CompetenceProfileFamilyCatalogDocumentTopElem = XmlTopElem & { Doc: CompetenceProfileFamilyCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  competence_profiles: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CompetenceProfileFamilyCatalogDocument = XmlDocument & { TopElem: CompetenceProfileFamilyCatalogDocumentTopElem; };
