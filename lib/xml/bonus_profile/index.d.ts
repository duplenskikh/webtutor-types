interface IBonusProfileEvaluatePaResult {
  error: number;
  message: string;
  value: number | null;
  boss_treat: unknown;
}

type BonusProfileDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: BonusProfileDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  script: XmlElem<string>;
  url: XmlElem<string>;
  evaluate_pa(): IBonusProfileEvaluatePaResult;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type BonusProfileDocument = XmlDocument & {
  TopElem: BonusProfileDocumentTopElem;
};
