type DischargeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.discharge_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
