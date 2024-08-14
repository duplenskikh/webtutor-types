type HostCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Имя узла или IP */
  hostname: XmlElem<string | null>;
  /** Порт */
  port: XmlElem<number | null>;
  /** Узел */
  host: XmlElem<string | null>;
  /** Аутентификация на портале (по умолчанию) */
  portal_auth_type: XmlElem<string>;
  allow_lds_auth: XmlElem<boolean>;
  /** Сайт */
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  /** Является системным */
  is_std: XmlElem<boolean | null>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};
