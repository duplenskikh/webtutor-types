interface Env extends Object {
  /**
   * Текущий сайт пользователя с которым он взаимодействует.
   */
  curSite?: SiteDocumentTopElem;
  /**
   * Id текущего пользователя.
   */
  curUserID?: number;
  /**
   * Объект пользователя.
   */
  curUser?: CurUser;
}

type CurUser = CollaboratorDocumentTopElem;

declare const curUserID: number;
declare const curUser: CurUser;
