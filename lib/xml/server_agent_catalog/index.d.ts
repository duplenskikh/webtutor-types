type ServerAgentCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Тип агента */
  type: XmlElem<string | null, typeof common.server_agent_types>;
  /** Блок, к которому прикреплен */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  check_time_step(curDate: unknown, sleepSec: number): unknown;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
