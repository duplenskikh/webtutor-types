interface Env extends Object {
  curWebDesignID: number;
  curWebDesignUrl: string;
  curLngID: string;
  curSiteID: number;
  curHostID: number;
  curHostSettings: object;
  curHostPath: string;
  curHostName: string;
  curDevice: {
    type: "desktop",
    disp_type: ""
  } | {
    type: "phone",
    disp_type: "mobile"
  };
  curVars: object;
  curWebModeExecFlag: boolean;
  curSessionID: number;
  curAnonymousAccess: boolean;
  curDoc: DocumentDocumentTopElem;
  curDocID: number | null;
  curDocSid: number | null;
  curObjectID: number | null;
  curObjectDoc: XmlDocument | null;
  curObject: Object;
  curObjectInitErrorText: string;
  curMode: string;
  curWebModeID: number;
  curContext: unknown[];
  curContextObjectID: number | null;
  curContextMode: string;
  curI18n: object;
  curUserID: number;
  curUser: CurUser;
}

type CurUser = CollaboratorDocumentTopElem;

declare const curUserID: number;
declare const curUser: CurUser;
