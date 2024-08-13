interface PayDocBase extends CostCurrencyBase {
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  nds: XmlElem<number | null>;
  exemption_nds: XmlElem<string | null>;
}

interface PayBase {
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  cost: XmlElem<number | null>;
  nds(): unknown;
}

interface PayPhaseDocumentCollaboratorExpenseItem {
  expense_item_id: XmlElem<number | null, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number | null>;
}

interface PayPhaseDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  expense_items: XmlMultiElem<PayPhaseDocumentCollaboratorExpenseItem | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  not_pay: XmlElem<boolean | null>;
}

interface PayPhaseDocumentExpense {
  id: XmlElem<string | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  is_pay: XmlElem<boolean | null>;
  no_nds: XmlElem<boolean | null>;
  exemption_nds: XmlElem<string | null>;
  supplier_name: XmlElem<string | null>;
  supplier_code: XmlElem<string | null>;
  invoice: XmlElem<PayBase | null>;
  draft: XmlElem<PayBase | null>;
  act: XmlElem<PayBase | null>;
  invoice2: XmlElem<PayBase | null>;
}

interface PayPhaseDocumentInvoice extends PayDocBase {
  is_pay: XmlElem<boolean | null>;
  no_nds: XmlElem<boolean | null>;
}

type PayPhaseDocumentTopElem = XmlTopElem &
MsEventSdBase &
CostCurrencyBase &
ExpenseDistributionBase &
CostCentersBase &
AdminAccessBase & {
  Doc: PayPhaseDocument;
  name: XmlElem<string | null>;
  budget_period_id: XmlElem<number | null, BudgetPeriodCatalogDocumentTopElem>;
  contract_id: XmlElem<number | null, ContractCatalogDocumentTopElem>;
  nds_rate: XmlElem<number | null>;
  distribute_cost_type: XmlElem<string>;
  collaborators: XmlMultiElem<PayPhaseDocumentCollaborator | null>;
  unnamed_person_num: XmlElem<number | null>;
  unnamed_person_sum: XmlElem<number | null>;
  expenses: XmlMultiElem<PayPhaseDocumentExpense | null>;
  invoice: XmlElem<PayPhaseDocumentInvoice | null>;
  draft: XmlElem<PayDocBase | null>;
  act: XmlElem<PayDocBase | null>;
  invoice2: XmlElem<PayDocBase | null>;
  invoice_sum: XmlElem<number | null>;
  draft_sum: XmlElem<number | null>;
  act_sum: XmlElem<number | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  create_name(): unknown;
  distribute_cost_centers(): unknown;
  distribute_payment_persons(): unknown;
  distribute_total_cost(): unknown;
};

type PayPhaseDocument = XmlDocument & {
  TopElem: PayPhaseDocumentTopElem;
  pay_phase: PayPhaseDocumentTopElem;
  OnLocalInit(): void;
  DocDesc(): string;
};
