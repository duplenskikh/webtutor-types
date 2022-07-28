type RiskLevelDocumentTopElem = XmlTopElem & { Doc: RiskLevelDocument } & 
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type RiskLevelDocument = XmlDocument & { TopElem: RiskLevelDocumentTopElem; };
