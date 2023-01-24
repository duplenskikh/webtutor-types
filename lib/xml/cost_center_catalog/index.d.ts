type CostCenterCatalogDocumentTopElem = XmlTopElem & { Doc: CostCenterCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  is_active: XmlElem<boolean>;
  parent_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CostCenterCatalogDocument = XmlDocument & { TopElem: CostCenterCatalogDocumentTopElem; };
