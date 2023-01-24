type BonusItemCatalogDocumentTopElem = XmlTopElem & { Doc: BonusItemCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  assessment_appraise_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  person_id: XmlElem<number>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  result: XmlElem<number>;
}

type BonusItemCatalogDocument = XmlDocument & { TopElem: BonusItemCatalogDocumentTopElem; };
