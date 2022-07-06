interface AppointmentTypeTopElem extends XmlTopElem<AppointmentTypeDocument>,
  ObjectCodeNameBase,
  IWTAdminAccessBase,
  IWTDocInfo
{
  comment: XmlElem<string>;
}

type AppointmentTypeDocument = XmlDocument<AppointmentTypeTopElem>;
