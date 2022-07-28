interface DnStreamDocumentStudGroup {
  group_id: XmlElem<number>;
}

type DnStreamDocumentTopElem = XmlTopElem & { Doc: DnStreamDocument } & 
  AdminAccessBase &
  CustomElemsBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  stud_groups: XmlMultiElem<DnStreamDocumentStudGroup>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnStreamDocument = XmlDocument & { TopElem: DnStreamDocumentTopElem; };
