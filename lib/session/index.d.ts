declare interface Session extends Object {
  Env: Env;
  sid: number;
}

declare interface Env {
  /**
   * Текущий сайт пользователя с которым он взаимодействует
   */
  curSite: SiteTopElem;
  /**
   * ID текущего пользователя
   */
  curUserID: number;
  /**
   * Объект пользователя
   */
  curUser: CollaboratorTopElem;
}
