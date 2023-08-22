type MsPersonSdInnerBase = {
  sd: {
    fullname: XmlElem<string>;
    position_name: XmlElem<string>;
    position_id: XmlElem<number>;
    org_name: XmlElem<string>;
    is_dismiss: XmlElem<boolean>;
  }
};

type MsPersonSdBase = {
  person_id: XmlElem<number> & MsPersonSdInnerBase;
};
