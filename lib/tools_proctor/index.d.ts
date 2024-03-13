declare namespace tools_proctor {
  function alerd(sText: string, bDebug: boolean): unknown;
  function get_proctoring_object_id(iLearningObjectId: number, teLearningObject: unknown): unknown;
  function get_proctoring_object(iLearningObjectId: number, teLearningObject: unknown): unknown;
  function get_proctoring_learning_object(iLearningObjectId: number, bReturnDoc: boolean): unknown;
  function get_proctoring_active_object_id(teLearningRecord: unknown, feLearning: unknown): unknown;
  function learning_record_finish(iLearningID: number, teLearning: unknown, teProctoringObject: unknown): unknown;
  function get_proctoring_learning_url(iLearningId: number, teLearning: unknown, sCurHostPath: string, sLaunchUrl: string, sUrlParams: string, teProctoringObject: unknown): unknown;
  function download_proctoring_files(iLearningRecordID: number): unknown;
  function get_proctoring_active_learning_id(teRecord: unknown): unknown;
  function finish_learning_record_thread(iActiveLearningId: number, iLearningId: number, teLearning: unknown, teProctorObject: unknown): unknown;
  function finish_learning_record(iActiveLearningId: number, iLearningId: number, teLearning: unknown, teProctorObject: unknown): unknown;
  function check_foto(iLearningRecordId: number, docLearningRecord: unknown, arrDefaultFotoUrls: unknown, rConfidence: number, sModelType: string): unknown;
}
