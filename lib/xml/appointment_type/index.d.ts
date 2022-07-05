interface IWTAppointmentTypeTopElem extends IWTXmlDocumentTopElem<IWTAppointmentTypeTopElem>,
  ObjectCodeNameBase,
  IWTAdminAccessBase,
  IWTDocInfo {
  comment?: XmlElem<string>;
}

type IWTAppointmentTypeDocument = IWTXmlDocument<IWTAppointmentTypeTopElem>;
