interface Thread {
  /**
   * Проверяет, выполняется ли еще запущенный поток.
   */
  IsRunning: boolean;

  /**
   * Объект типа Object, используемый для хранения произвольных параметров.
   * Обычно параметры устанавливаются перед запуском потока, после чего код,
   * выполняемый в потоке, использует их.
   *
   * Параметр не является thread-safe, поэтому код, запускающий поток,
   * не должен обращаться к ним после запуска потока.
   */
  Param: Object;

  /**
   * Запускает выполнения потока из заданного кода.
   * @param code строка, содержащая код (String).
   * @xample
   * thread = new Thread;
   * thread.EvalCode( 'lib_backup.run_backup()' );
   */
  EvalCode(code: string): void;

  /**
   * Запускает выполнения потока из кода, загруженного из заданного url.
   * @param url url, содержащий код (String).
   * @example
   * thread = new Thread;
   * thread.EvalCodeUrl( 'rcr_agent.js' );
   */
  EvalCodeUrl(url: string): any;
}

interface ThreadConstructor {
  new(...arg: any): Thread;
  (...arg: any): Thread;
}

/**
 * Объект, обозначающий отдельный запускаемый поток (thread).
 * На сегодняшний день создание потока через объект Thread не рекомендуется,
 * поскольку существует более удобный способ запyска потока через метод EvalThread()
 * объекта XmlDoc, предлагающий концепцию класса, содержажего атрибуты и методы.
 */
declare const Thread: ThreadConstructor;
