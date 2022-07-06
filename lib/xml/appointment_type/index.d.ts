type AppointmentTypeTopElem =
  ObjectCodeNameBase &
  IWTAdminAccessBase &
  IWTDocInfo &
{
  comment: XmlElem<string>;
}

type AppointmentTypeDocument = XmlDocument<AppointmentTypeTopElem>;
