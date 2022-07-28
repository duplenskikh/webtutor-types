type BonusProfileDocumentTopElem = XmlTopElem & { Doc: BonusProfileDocument } & 
  WebVariablesBase &
  CustomElemsBase &
  AdminAccessBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  script?: XmlElem<string>;
  url?: XmlElem<string>;
  evaluate_pa?(): unknown;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type BonusProfileDocument = XmlDocument & { TopElem: BonusProfileDocumentTopElem; };
