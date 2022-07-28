type KpiGroupDocumentTopElem = XmlTopElem & { Doc: KpiGroupDocument } & 
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  workflow_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
}

type KpiGroupDocument = XmlDocument & { TopElem: KpiGroupDocumentTopElem; };
