interface BonusProfileDocumentKpi {
  kpi_id: XmlElem<number | null, KpiCatalogDocumentTopElem>;
  /** Вес */
  weight: XmlElem<number>;
}

interface BonusProfileDocumentKpiGroup {
  kpi_group_id: XmlElem<number | null, KpiGroupCatalogDocumentTopElem>;
  /** Вес */
  weight: XmlElem<number>;
}

type BonusProfileDocumentTopElem = XmlTopElem &
WebVariablesBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: BonusProfileDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Тип */
  calc_type: XmlElem<number | null>;
  kpis: XmlMultiElem<BonusProfileDocumentKpi | null>;
  kpi_groups: XmlMultiElem<BonusProfileDocumentKpiGroup | null>;
  script: XmlElem<string | null>;
  /** Ссылка на шаблон */
  url: XmlElem<string | null>;
  evaluate_pa(paId: number, pa: PaDocument): never | Object;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type BonusProfileDocument = XmlDocument & {
  TopElem: BonusProfileDocumentTopElem;
  bonus_profile: BonusProfileDocumentTopElem;
  DocDesc(): string;
};
