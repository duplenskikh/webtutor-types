type SaleContractCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Статус */
  state_id: XmlElem<number | null, ContractStateCatalogDocumentTopElem>;
  is_agent_contract: XmlElem<boolean | null>;
  agent_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Организация */
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Клиент */
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  /** Клиент */
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Менеджер */
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Договор */
  parent_sale_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  /** Номер */
  number: XmlElem<string | null>;
  /** Порядковый номер */
  serial_number: XmlElem<string | null>;
  /** Дата подписания */
  date_signature: XmlElem<Date | null>;
  /** Дата окончания */
  finish_date: XmlElem<Date | null>;
  client_legal: XmlElem<string | null>;
  provider_legal: XmlElem<string | null>;
  client_legal_name: XmlElem<string | null>;
  provider_legal_name: XmlElem<string | null>;
  bad_debt: XmlElem<boolean | null>;
  /** Стоимость */
  contract_cost: XmlElem<number | null>;
  /** Валюта */
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  contract_signature: XmlElem<string | null>;
  prev_contract_id: XmlElem<number | null, SaleContractCatalogDocumentTopElem>;
  contract_type: XmlElem<number | null, SaleContractTypeCatalogDocumentTopElem>;
  /** Дата отправки */
  sent_date: XmlElem<Date | null>;
  /** Получатель */
  recipient: XmlElem<string | null>;
  consignment_document_number: XmlElem<string | null>;
  is_received: XmlElem<boolean | null>;
  received_date: XmlElem<Date | null>;
  docs_comment: XmlElem<string | null>;
  /** Дата создания */
  creation_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
