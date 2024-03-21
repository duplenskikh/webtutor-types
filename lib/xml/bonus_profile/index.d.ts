interface BonusProfileDocumentKpi {
  kpi_id: XmlElem<number, KpiCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

interface BonusProfileDocumentKpiGroup {
  kpi_group_id: XmlElem<number, KpiGroupCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

type BonusProfileDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: BonusProfileDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  calc_type: XmlElem<number>;
  kpis: XmlMultiElem<BonusProfileDocumentKpi>;
  kpi_groups: XmlMultiElem<BonusProfileDocumentKpiGroup>;
  script: XmlElem<string>;
  url: XmlElem<string>;
  evaluate_pa(paId: number, pA: unknown): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type BonusProfileDocument = XmlDocument & {
  TopElem: BonusProfileDocumentTopElem;
  bonus_profile: BonusProfileDocumentTopElem;
  DocDesc(): unknown;
};
