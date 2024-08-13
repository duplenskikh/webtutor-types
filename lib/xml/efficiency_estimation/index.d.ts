type EfficiencyEstimationDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EfficiencyEstimationDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
};

type EfficiencyEstimationDocument = XmlDocument & {
  TopElem: EfficiencyEstimationDocumentTopElem;
  efficiency_estimation: EfficiencyEstimationDocumentTopElem;
  DocDesc(): string;
};
