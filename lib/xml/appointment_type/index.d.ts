type AppointmentTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: AppointmentTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type AppointmentTypeDocument = XmlDocument & {
  TopElem: AppointmentTypeDocumentTopElem;
  appointment_type: AppointmentTypeDocumentTopElem;
  DocDesc(): string;
};
