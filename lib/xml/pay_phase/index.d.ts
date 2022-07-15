interface PayPhaseCollaboratorExpenseItem {
  expense_item_id?: XmlElem<number>;
  sum?: XmlElem<number>;
}

interface PayPhaseCollaborator extends PersonFillingBase {
  collaborator_id?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  total_sum?: XmlElem<number>;
  not_pay?: XmlElem<boolean>;
  expense_items?: XmlMultiElem<PayPhaseCollaboratorExpenseItem>;
}

interface PayPhaseExpenseInvoice extends PayBase {
}

interface PayPhaseExpenseDraft extends PayBase {
}

interface PayPhaseExpenseAct extends PayBase {
}

interface PayPhaseExpenseInvoice2 extends PayBase {
}

interface PayPhaseExpense {
  id?: XmlElem<string>;
  currency?: XmlElem<string>;
  is_pay?: XmlElem<boolean>;
  no_nds?: XmlElem<boolean>;
  exemption_nds?: XmlElem<string>;
  supplier_name?: XmlElem<string>;
  supplier_code?: XmlElem<string>;
  invoice?: XmlElem<PayPhaseExpenseInvoice>;
  draft?: XmlElem<PayPhaseExpenseDraft>;
  act?: XmlElem<PayPhaseExpenseAct>;
  invoice2?: XmlElem<PayPhaseExpenseInvoice2>;
}

interface PayPhaseViewExpense {
  id?: XmlElem<string>;
  tab_select?: XmlElem<string>;
  unnamed_person_sum?: XmlElem<number>;
}

interface PayPhaseView {
  unnamed_person_total_sum?: XmlElem<number>;
  total_sum?: XmlElem<number>;
  expenses?: XmlMultiElem<PayPhaseViewExpense>;
}

interface PayPhaseInvoice extends PayDocBase {
  is_pay?: XmlElem<boolean>;
  no_nds?: XmlElem<boolean>;
}

interface PayPhaseDraft extends PayDocBase {
}

interface PayPhaseAct extends PayDocBase {
}

interface PayPhaseInvoice2 extends PayDocBase {
}

interface PayPhaseTopElem extends XmlTopElem<PayPhaseDocument>, MsEventSdBase, CostCurrencyBase, ExpenseDistributionBase, CostCentersBase, AdminAccessBase {
  name?: XmlElem<string>;
  budget_period_id?: XmlElem<number>;
  contract_id?: XmlElem<number>;
  nds_rate?: XmlElem<number>;
  distribute_cost_type?: XmlElem<string>;
  unnamed_person_num?: XmlElem<number>;
  unnamed_person_sum?: XmlElem<number>;
  invoice_sum?: XmlElem<number>;
  draft_sum?: XmlElem<number>;
  act_sum?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  total_sum?: XmlElem<number>;
  total_cost?: XmlElem<number>;
  collaborators?: XmlMultiElem<PayPhaseCollaborator>;
  expenses?: XmlMultiElem<PayPhaseExpense>;
  view?: XmlElem<PayPhaseView>;
  invoice?: XmlElem<PayPhaseInvoice>;
  draft?: XmlElem<PayPhaseDraft>;
  act?: XmlElem<PayPhaseAct>;
  invoice2?: XmlElem<PayPhaseInvoice2>;
  create_name?(): any;
  distribute_cost_centers?(): any;
  distribute_payment_persons?(): any;
  distribute_total_cost?(): any;
}

type PayPhaseDocument = XmlDocument<PayPhaseTopElem>;
