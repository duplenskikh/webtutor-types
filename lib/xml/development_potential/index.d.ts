type DevelopmentPotentialDocumentTopElem = XmlTopElem & { Doc: DevelopmentPotentialDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type DevelopmentPotentialDocument = XmlDocument & { TopElem: DevelopmentPotentialDocumentTopElem; };
