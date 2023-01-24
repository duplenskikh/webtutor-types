type EfficiencyEstimationCatalogDocumentTopElem = XmlTopElem & { Doc: EfficiencyEstimationCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type EfficiencyEstimationCatalogDocument = XmlDocument & { TopElem: EfficiencyEstimationCatalogDocumentTopElem; };
