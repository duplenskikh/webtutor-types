interface IWTAppointmentTypeTopElem extends ObjectCodeNameBase, IWTAdminAccessBase, IWTDocInfo {
  comment?: XmlElem<string>;
}

type IWTAppointmentTypeDocument = IWTXmlDocument<IWTAppointmentTypeTopElem>;
