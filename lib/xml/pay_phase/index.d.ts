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
}

type PayPhaseDocumentTopElem = XmlTopElem & { Doc: PayPhaseDocument } & 
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
  invoice_sum?(): number;
  draft_sum?(): number;
  act_sum?(): number;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  create_name?(): unknown;
  distribute_cost_centers?(): unknown;
  distribute_payment_persons?(): unknown;
  distribute_total_cost?(): unknown;
}

type PayPhaseDocument = XmlDocument & { TopElem: PayPhaseDocumentTopElem; };
