interface PollResultDocumentQuestion {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  value: XmlElem<string>;
  comment: XmlElem<string>;
  read_only: XmlElem<boolean>;
}

type PollResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollResultDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  poll_id: XmlElem<number, PollCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number, PollProcedureCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  save_date: XmlElem<Date>;
  status: XmlElem<number>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  questions: XmlMultiElem<PollResultDocumentQuestion>;
  last_item_id: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  use_proctoring: XmlElem<boolean>;
  update_name(): unknown;
};

type PollResultDocument = XmlDocument & {
  TopElem: PollResultDocumentTopElem;
  poll_result: PollResultDocumentTopElem;
  OnBeforeSave(): unknown;
  DocDesc(): unknown;
};
