interface IWTAppointmentTypeTopElem extends IWTXmlDocumentTopElem<IWTServerAgentDocument>,
  ObjectCodeNameBase,
  IWTAdminAccessBase,
  IWTDocInfo {
  comment?: XmlElem<string>;
}

type IWTAppointmentTypeDocument = IWTXmlDocument<IWTAppointmentTypeTopElem>;
