interface PayStageDocumentCostMin {
  /** Стоимость */
  value: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCostMax {
  /** Стоимость */
  value: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCostFact {
  /** Стоимость */
  value: XmlElem<number | null>;
  /** Дата */
  date: XmlElem<Date | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  rate: XmlElem<number | null>;
}

interface PayStageDocumentCost {
  /** Плановая стоимость */
  min: XmlElem<PayStageDocumentCostMin | null>;
  /** Плановая стоимость */
  max: XmlElem<PayStageDocumentCostMax | null>;
  fact: XmlElem<PayStageDocumentCostFact | null>;
}

type PayStageDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase &
AdminAccessBase & {
  Doc: PayStageDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Договор */
  sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  agent_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  is_agent_sale_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  is_prepayment: XmlElem<boolean | null>;
  /** Тип */
  type_id: XmlElem<string | null>;
  closing_method: XmlElem<string | null>;
  /** Центр затрат */
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  cost_type: XmlElem<string | null>;
  is_autoclosing: XmlElem<boolean | null>;
  autoclosing_period: XmlElem<number | null>;
  /** Дата начала */
  start_date: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  /** Стоимость */
  cost: XmlElem<PayStageDocumentCost | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type PayStageDocument = XmlDocument & {
  TopElem: PayStageDocumentTopElem;
  pay_stage: PayStageDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};
