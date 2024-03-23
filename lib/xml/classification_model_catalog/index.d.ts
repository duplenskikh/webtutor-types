type ClassificationModelCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  required_probability: XmlElem<number>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  processing_code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  OnBuild(): void;
};
