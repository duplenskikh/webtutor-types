type AppointmentTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: AppointmentTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type AppointmentTypeDocument = XmlDocument & {
  TopElem: AppointmentTypeDocumentTopElem;
  appointment_type: AppointmentTypeDocumentTopElem;
  DocDesc(): unknown;
};
