type ServerAgentCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.server_agent_types>;
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  check_time_step(curDate: unknown, sleepSec: number): unknown;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
