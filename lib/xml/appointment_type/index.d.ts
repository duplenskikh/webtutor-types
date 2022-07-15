interface AppointmentTypeTopElem extends XmlTopElem<AppointmentTypeDocument>,
  ObjectCodeNameBase,
  AdminAccessBase,
  IWTDocInfo
{
  comment: XmlElem<string>;
}

type AppointmentTypeDocument = XmlDocument<AppointmentTypeTopElem>;
