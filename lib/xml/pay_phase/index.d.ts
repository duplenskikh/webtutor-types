interface PayDocBase extends CostCurrencyBase {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  nds?: XmlElem<number>;
  exemption_nds?: XmlElem<string>;
}

interface PayBase {
  code?: XmlElem<string>;
  date?: XmlElem<Date>;
  cost?: XmlElem<number>;
  nds?(): any;
}

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

interface PayPhaseExpense {
  id?: XmlElem<string>;
  currency?: XmlElem<string>;
  is_pay?: XmlElem<boolean>;
  no_nds?: XmlElem<boolean>;
  exemption_nds?: XmlElem<string>;
  supplier_name?: XmlElem<string>;
  supplier_code?: XmlElem<string>;
}

interface PayPhaseInvoice extends PayDocBase {
  is_pay?: XmlElem<boolean>;
  no_nds?: XmlElem<boolean>;
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

interface PayPhaseDocumentCollaboratorExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
}
interface PayPhaseDocumentCollaborator extends PersonFillingBase {
  collaborator_id: XmlElem<number>;
  expense_items: XmlMultiElem<PayPhaseDocumentCollaboratorExpenseItem>;
  cost_center_id: XmlElem<number>;
  not_pay: XmlElem<boolean>;
}

interface PayPhaseDocumentExpense {
  id: XmlElem<string>;
  currency: XmlElem<string>;
  is_pay: XmlElem<boolean>;
  no_nds: XmlElem<boolean>;
  exemption_nds: XmlElem<string>;
  supplier_name: XmlElem<string>;
  supplier_code: XmlElem<string>;
  invoice: XmlElem<PayBase>;
  draft: XmlElem<PayBase>;
  act: XmlElem<PayBase>;
  invoice2: XmlElem<PayBase>;
}

type PayPhaseDocumentTopElem = XmlTopElem & { Doc: PayPhaseDocument } & 
  MsEventSdBase &
  CostCurrencyBase &
  ExpenseDistributionBase &
  CostCentersBase &
  AdminAccessBase & {
  name: XmlElem<string>;
  budget_period_id: XmlElem<number>;
  contract_id: XmlElem<number>;
  nds_rate: XmlElem<number>;
  distribute_cost_type: XmlElem<string>;
  collaborators: XmlMultiElem<PayPhaseDocumentCollaborator>;
  unnamed_person_num: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  expenses: XmlMultiElem<PayPhaseDocumentExpense>;
  draft: XmlElem<PayDocBase>;
  act: XmlElem<PayDocBase>;
  invoice2: XmlElem<PayDocBase>;
  invoice_sum(): number;
  draft_sum(): number;
  act_sum(): number;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  create_name(): unknown;
  distribute_cost_centers(): unknown;
  distribute_payment_persons(): unknown;
  distribute_total_cost(): unknown;
}

type PayPhaseDocument = XmlDocument & { TopElem: PayPhaseDocumentTopElem; };
