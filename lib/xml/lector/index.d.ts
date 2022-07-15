interface IWTLectorTopElem extends IWTPersonBase,
  AdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo,
  ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  type?: XmlElem<IWTLectorTypes>;
  resource_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  person_position_name?: XmlElem<string>;
  person_subdivision_name?: XmlElem<string>;
  allow_publication?: XmlElem<boolean>;
  is_dismiss?: XmlElem<boolean>;
  lector_fullname?: XmlElem<string>;
}

type IWTLectorDocument = XmlDocument<IWTLectorTopElem>;
