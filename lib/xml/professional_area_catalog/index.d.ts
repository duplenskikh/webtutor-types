type ProfessionalAreaCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  parent_id: XmlElem<number | null, ProfessionalAreaCatalogDocumentTopElem>;
  professional_area_type_id: XmlElem<number | null, ProfessionalAreaTypeCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
