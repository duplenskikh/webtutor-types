type ProfessionalAreaCatalogDocumentTopElem = XmlTopElem & { Doc: ProfessionalAreaCatalogDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  parent_id: XmlElem<number>;
  professional_area_type_id: XmlElem<number>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProfessionalAreaCatalogDocument = XmlDocument & { TopElem: ProfessionalAreaCatalogDocumentTopElem; };
