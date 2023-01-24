type BenefitItemCatalogDocumentTopElem = XmlTopElem & { Doc: BenefitItemCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  benefit_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type BenefitItemCatalogDocument = XmlDocument & { TopElem: BenefitItemCatalogDocumentTopElem; };
