type TrainingPlanCatalogDocumentTopElem = XmlTopElem & { Doc: TrainingPlanCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type TrainingPlanCatalogDocument = XmlDocument & { TopElem: TrainingPlanCatalogDocumentTopElem; };
