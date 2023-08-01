interface BonusItemDocumentBonuse {
  pa_id: XmlElem<number>;
  bonus_profile_id: XmlElem<number>;
  value: XmlElem<number>;
  boss_treat: XmlElem<number>;
  overall: XmlElem<number>;
}

type BonusItemDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: BonusItemDocument;
  name(): string;
  assessment_appraise_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  person_id: XmlElem<number>;
  period_start: XmlElem<Date>;
  period_end: XmlElem<Date>;
  bonuses: XmlMultiElem<BonusItemDocumentBonuse>;
  result: XmlElem<number>;
  calc_result(): void;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BonusItemDocument = XmlDocument & {
  TopElem: BonusItemDocumentTopElem;
};
