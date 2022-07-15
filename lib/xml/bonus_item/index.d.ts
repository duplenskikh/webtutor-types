interface BonusItemBonusesBonus {
  pa_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  value?: XmlElem<number>;
  boss_treat?: XmlElem<number>;
  overall?: XmlElem<number>;
}

interface BonusItemBonuses {
  bonus?: XmlElem<BonusItemBonusesBonus>;
}

interface BonusItemView {
  selector?: XmlElem<string>;
  is_edit_mode?: XmlElem<boolean>;
}

interface BonusItemTopElem extends XmlTopElem<BonusItemDocument>, AdminAccessBase {
  name?: XmlElem<string>;
  assessment_appraise_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  period_start?: XmlElem<Date>;
  period_end?: XmlElem<Date>;
  result?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  bonuses?: XmlElem<BonusItemBonuses>;
  view?: XmlElem<BonusItemView>;
  calc_result?(): any;
}

type BonusItemDocument = XmlDocument<BonusItemTopElem>;
