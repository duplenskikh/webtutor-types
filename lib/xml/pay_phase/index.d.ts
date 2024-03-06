interface PayDocBase extends CostCurrencyBase {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  nds: XmlElem<number>;
  exemption_nds: XmlElem<string>;
}

interface PayBase {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  cost: XmlElem<number>;
  nds(): unknown;
}

interface PayPhaseDocumentCollaboratorExpenseItem {
  expense_item_id: XmlElem<number, ExpenseItemCatalogDocumentTopElem>;
  sum: XmlElem<number>;
}

interface PayPhaseDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  expense_items: XmlMultiElem<PayPhaseDocumentCollaboratorExpenseItem>;
  cost_center_id: XmlElem<number, CostCenterCatalogDocumentTopElem>;
  not_pay: XmlElem<boolean>;
}

interface PayPhaseDocumentExpensePayBase {

}

interface PayPhaseDocumentExpense {
  id: XmlElem<string>;
  currency: XmlElem<string, typeof lists.currency_types>;
  is_pay: XmlElem<boolean>;
  no_nds: XmlElem<boolean>;
  exemption_nds: XmlElem<string>;
  supplier_name: XmlElem<string>;
  supplier_code: XmlElem<string>;
  invoice: XmlElem<PayPhaseDocumentExpensePayBase>;
  draft: XmlElem<PayPhaseDocumentExpensePayBase>;
  act: XmlElem<PayPhaseDocumentExpensePayBase>;
  invoice2: XmlElem<PayPhaseDocumentExpensePayBase>;
}

interface PayPhaseDocumentPayDocBase {

}

type PayPhaseDocumentTopElem = XmlTopElem &
MsEventSdBase &
CostCurrencyBase &
ExpenseDistributionBase &
CostCentersBase &
AdminAccessBase & {
  Doc: PayPhaseDocument;
  name: XmlElem<string>;
  budget_period_id: XmlElem<number, BudgetPeriodCatalogDocumentTopElem>;
  contract_id: XmlElem<number, ContractCatalogDocumentTopElem>;
  nds_rate: XmlElem<number>;
  distribute_cost_type: XmlElem<string>;
  collaborators: XmlMultiElem<PayPhaseDocumentCollaborator>;
  unnamed_person_num: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  expenses: XmlMultiElem<PayPhaseDocumentExpense>;
  invoice: XmlElem<PayPhaseDocumentPayDocBase>;
  draft: XmlElem<PayPhaseDocumentPayDocBase>;
  act: XmlElem<PayPhaseDocumentPayDocBase>;
  invoice2: XmlElem<PayPhaseDocumentPayDocBase>;
  invoice_sum: XmlElem<number>;
  draft_sum: XmlElem<number>;
  act_sum: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  create_name(): unknown;
  distribute_cost_centers(): unknown;
  distribute_payment_persons(): unknown;
  distribute_total_cost(): unknown;
};

type PayPhaseDocument = XmlDocument & {
  TopElem: PayPhaseDocumentTopElem;
  pay_phase: PayPhaseDocumentTopElem;
  OnLocalInit(): unknown;
  DocDesc(): unknown;
};
