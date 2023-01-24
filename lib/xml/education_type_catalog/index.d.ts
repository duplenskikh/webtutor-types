type EducationTypeCatalogDocumentTopElem = XmlTopElem & { Doc: EducationTypeCatalogDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EducationTypeCatalogDocument = XmlDocument & { TopElem: EducationTypeCatalogDocumentTopElem; };
