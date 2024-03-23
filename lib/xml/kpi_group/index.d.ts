type KpiGroupDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KpiGroupDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type KpiGroupDocument = XmlDocument & {
  TopElem: KpiGroupDocumentTopElem;
  kpi_group: KpiGroupDocumentTopElem;
  DocDesc(): string;
};
