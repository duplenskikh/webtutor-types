interface ExpenseTopElem extends XmlTopElem<ExpenseDocument>, FileListBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  pay_stage_id?: XmlElem<number>;
  cost?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  number?: XmlElem<string>;
  expense_create_date?: XmlElem<Date>;
  is_formed?: XmlElem<boolean>;
  payment_plan_date?: XmlElem<Date>;
  is_paid?: XmlElem<boolean>;
  payment_fact_date?: XmlElem<Date>;
  bad_debt?: XmlElem<boolean>;
  sent_date?: XmlElem<Date>;
  sent_type?: XmlElem<string>;
  recipient?: XmlElem<string>;
  consignment_document_number?: XmlElem<string>;
  sent_messenger_service_id?: XmlElem<number>;
  back_sent_type?: XmlElem<string>;
  back_sent_messenger_service_id?: XmlElem<number>;
  is_received?: XmlElem<boolean>;
  received_date?: XmlElem<Date>;
  docs_comment?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type ExpenseDocument = XmlDocument<ExpenseTopElem>;
