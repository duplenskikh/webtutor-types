type KpiGroupDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KpiGroupDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type KpiGroupDocument = XmlDocument & {
  TopElem: KpiGroupDocumentTopElem;
  kpi_group: KpiGroupDocumentTopElem;
  DocDesc(): string;
};
