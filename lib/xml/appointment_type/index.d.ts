type AppointmentTypeDocumentTopElem = XmlTopElem & { Doc: AppointmentTypeDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type AppointmentTypeDocument = XmlDocument & { TopElem: AppointmentTypeDocumentTopElem; };
