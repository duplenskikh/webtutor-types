interface PollResultDocumentQuestion {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  value: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  read_only: XmlElem<boolean | null>;
}

type PollResultDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: PollResultDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  poll_id: XmlElem<number | null, PollCatalogDocumentTopElem>;
  poll_procedure_id: XmlElem<number | null, PollProcedureCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  is_done: XmlElem<boolean>;
  create_date: XmlElem<Date | null>;
  save_date: XmlElem<Date | null>;
  status: XmlElem<number>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  questions: XmlMultiElem<PollResultDocumentQuestion | null>;
  last_item_id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  use_proctoring: XmlElem<boolean>;
  update_name(): unknown;
};

type PollResultDocument = XmlDocument & {
  TopElem: PollResultDocumentTopElem;
  poll_result: PollResultDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};
