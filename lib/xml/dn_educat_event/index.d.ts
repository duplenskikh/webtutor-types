type DnEducatEventDocumentTopElem = XmlTopElem & { Doc: DnEducatEventDocument } & 
  CustomElemsBase &
  AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnEducatEventDocument = XmlDocument & { TopElem: DnEducatEventDocumentTopElem; };
