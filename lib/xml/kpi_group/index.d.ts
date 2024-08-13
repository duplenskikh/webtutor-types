type KpiGroupDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: KpiGroupDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Документооборот по умолчанию */
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type KpiGroupDocument = XmlDocument & {
  TopElem: KpiGroupDocumentTopElem;
  kpi_group: KpiGroupDocumentTopElem;
  DocDesc(): string;
};
