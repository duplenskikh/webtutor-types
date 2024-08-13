type DevelopmentPotentialDocumentTopElem = XmlTopElem &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: DevelopmentPotentialDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
};

type DevelopmentPotentialDocument = XmlDocument & {
  TopElem: DevelopmentPotentialDocumentTopElem;
  development_potential: DevelopmentPotentialDocumentTopElem;
  DocDesc(): string;
};
