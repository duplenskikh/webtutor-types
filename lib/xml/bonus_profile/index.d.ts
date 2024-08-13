interface BonusProfileDocumentKpi {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

interface BonusProfileDocumentKpiGroup {
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  weight: XmlElem<number>;
}

type BonusProfileDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: BonusProfileDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  calc_type: XmlElem<number | null>;
  kpis: XmlMultiElem<BonusProfileDocumentKpi | null>;
  kpi_groups: XmlMultiElem<BonusProfileDocumentKpiGroup | null>;
  script: XmlElem<string | null>;
  url: XmlElem<string | null>;
  evaluate_pa(paId: number, pa: PaDocument): never | Object;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BonusProfileDocument = XmlDocument & {
  TopElem: BonusProfileDocumentTopElem;
  bonus_profile: BonusProfileDocumentTopElem;
  DocDesc(): string;
};
