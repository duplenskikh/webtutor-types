type EfficiencyEstimationDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EfficiencyEstimationDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type EfficiencyEstimationDocument = XmlDocument & {
  TopElem: EfficiencyEstimationDocumentTopElem;
  efficiency_estimation: EfficiencyEstimationDocumentTopElem;
  DocDesc(): unknown;
};
