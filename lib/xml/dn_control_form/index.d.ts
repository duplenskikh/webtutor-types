type DnControlFormDocumentTopElem = XmlTopElem & { Doc: DnControlFormDocument } & 
  CustomElemsBase &
  AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnControlFormDocument = XmlDocument & { TopElem: DnControlFormDocumentTopElem; };
