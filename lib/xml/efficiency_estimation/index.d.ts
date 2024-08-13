type EfficiencyEstimationDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EfficiencyEstimationDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type EfficiencyEstimationDocument = XmlDocument & {
  TopElem: EfficiencyEstimationDocumentTopElem;
  efficiency_estimation: EfficiencyEstimationDocumentTopElem;
  DocDesc(): string;
};
