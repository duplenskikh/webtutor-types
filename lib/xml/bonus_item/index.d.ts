type BonusItemDocumentTopElem = XmlTopElem & { Doc: BonusItemDocument } & 
  AdminAccessBase & {
  name?(): string;
  assessment_appraise_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  period_start?: XmlElem<Date>;
  period_end?: XmlElem<Date>;
  result?: XmlElem<number>;
  calc_result?(): unknown;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type BonusItemDocument = XmlDocument & { TopElem: BonusItemDocumentTopElem; };
