type ServerAgentCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.server_agent_types>;
  block: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  check_time_step(curDate: unknown, sleepSec: number): unknown;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};
