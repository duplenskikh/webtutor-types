interface PollResultQuestion {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  value?: XmlElem<string>;
  comment?: XmlElem<string>;
  read_only?: XmlElem<boolean>;
}

interface PollResultViewObjectObject {
  object_id?: XmlElem<number>;
}

interface PollResultViewObject {
  question_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  objects?: XmlMultiElem<PollResultViewObjectObject>;
}

interface PollResultView {
  objects?: XmlMultiElem<PollResultViewObject>;
}

interface PollResultTopElem extends XmlTopElem<PollResultDocument>, PersonFillingBase, CustomElemsBase, AdminAccessBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  poll_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  is_done?: XmlElem<boolean>;
  create_date?: XmlElem<Date>;
  save_date?: XmlElem<Date>;
  status?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;
  last_item_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  use_proctoring?: XmlElem<boolean>;
  questions?: XmlMultiElem<PollResultQuestion>;
  view?: XmlElem<PollResultView>;
  update_name?(): any;
}

type PollResultDocument = XmlDocument<PollResultTopElem>;
