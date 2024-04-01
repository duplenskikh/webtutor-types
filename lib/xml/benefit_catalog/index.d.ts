type BenefitCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.benefit_statuses>;
  weight: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
