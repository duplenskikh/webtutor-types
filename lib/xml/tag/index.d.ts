interface TagTopElem extends XmlTopElem<TagDocument>,
  IWTAdminAccessBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  require_acknowledgement?: XmlElem<boolean>;
  experts?: XmlMultiElem<{
    expert_id: XmlElem<number>;
  }>;
  access?: XmlElem<IWTAccessDocBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

type TagDocument = XmlDocument<TagTopElem>;
