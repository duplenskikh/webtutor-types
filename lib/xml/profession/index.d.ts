type ProfessionDocumentTopElem = XmlTopElem & { Doc: ProfessionDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase &
  CustomElemsBase & {
  professional_area_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type ProfessionDocument = XmlDocument & { TopElem: ProfessionDocumentTopElem; };
