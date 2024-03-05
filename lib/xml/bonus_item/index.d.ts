interface BonusItemDocumentBonusesBonus {
  pa_id: XmlElem<number, PaCatalogDocumentTopElem>;
  bonus_profile_id: XmlElem<number, BonusProfileCatalogDocumentTopElem>;
  value: XmlElem<number>;
  boss_treat: XmlElem<number>;
  overall: XmlElem<number>;
}

interface BonusItemDocumentBonuses {
  bonus: XmlElem<BonusItemDocumentBonusesBonus>;
}

type BonusItemDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: BonusItemDocument;
  name(): unknown;
  assessment_appraise_id: XmlElem<number, AssessmentAppraiseCatalogDocumentTopElem>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  bonuses: XmlElem<BonusItemDocumentBonuses>;
  result: XmlElem<number>;
  calc_result(): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BonusItemDocument = XmlDocument & {
  TopElem: BonusItemDocumentTopElem;
};
