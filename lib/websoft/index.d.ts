declare namespace Websoft {
  namespace Office {
    /**
     * Библиотека для работы с документами Microsoft Office Excel
     */
    namespace Excel {
      /**
       * Класс для работы с документом Microsoft Excel
       */
      class Document {
        /**
         * Количество страниц
         */
        readonly WorkSheetsCount: number;

        /**
         * Создает новый лист
         */
        AddWorksheet(): number;

        /**
         * Закрывает документ
         */
        Close(): 0 | 1;

        /**
         * Создает книгу Excel
         */
        CreateWorkBook(): 0 | 1;

        /**
         * Используется для получения последней произошедшей ошибки
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента
         */
        GetVersion(): string;

        /**
         * Получает значение листа по номеру
         * @param index Порядковый номер листа
         */
        GetWorksheet(index: number): Worksheet;

        /**
         * Загружает данные в формате HTML из указанного файла
         * @param filePath Путь до файла в формате HTML
         * @param resourcesDirectoryName Название папки с ресурсами (изображения, стили и т.д.)
         * 
         */
        LoadHtmlFile(filePath: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Загружает данные в формате HTML из строки
         * @param htmlText Переменная, содержащаю строку в формате HTML
         * @param resourcesDirectoryName Название папки с ресурсами (изображения, стили и т.д.)
         * 
         */
        LoadHtmlString(htmlText: string, resourcesDirectoryName: string): 0 | 1;

        /**
         * Открывает файл Microsoft Excel
         * @param filePath Путь до файла
         */
        Open(filePath: string): 1 | 0;

        /**
         * Сохраняет текущий документ
         */
        Save(): 1 | 0;

        /**
         * Сохраняет документ по указанному пути.
         * Формат определяется по расширению имени файла в пути сохранения.
         * Доступные форматы: CSV, ODS, TIFF, SVG, PDF, MHTML, HTML
         * @param newPath Путь сохранения, включая имя файла
         */
        SaveAs(newPath: string): 1 | 0;
      }

      /**
       * Лист книги Excel
       */
      class Worksheet {
        /**
         * Свойство для управления ячейками листа
         */
        Cells: Cells;

        /**
         * Наборы графиков
         */
        Charts: ChartsCollection;

        /**
         * Название листа
         */
        Name: string;

        /**
         * Параметры страницы
         */
        PageSetup: PageSetup;

        /**
         * Набор изображений листа
         */
        Pictures: Pictures;

        /**
         * Создает новый набор графиков
         * @deprecated
         * @param chartType Тип графика
         * @param left Позиция по горизонтали
         * @param top Позиция по вертикали
         * @param width Ширинf
         * @param height Высота
         */
        AddChart(
          chartType: string,
          left: number,
          top: number,
          width: number,
          height: number
        ): Chart;

        /**
         * Получает ячейку по указанному расположению
         * (устаревшее, вместо данной функции нужно использовать Cells.GetCell())
         * @param cellName Расположение
         */
        GetCell(cellName: string): Cell;

        /**
         * Используется для получения последней произошедшей ошибки
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента
         */
        GetVersion(): string;
      }

      class Cells {
        /**
         * Колонки.
         */
        Columns: Columns;
        /**
         * Настройка потребления памяти. Принимает значения "MemoryPreference" или "Normal".
         * Значение "MemoryPreference" применяется при записи в документ большого количества данных.
         */
        MemorySetting: string;
        /**
         * Строки.
         */
        Rows: Rows;

        /**
         * Выбирает диапазон ячеек для массового управления
         * @param rangeCells Диапазон ячеек в формате "A1:B9"
         */
        CreateRange(rangeCells: string): Range;

        /**
         * Получает ячейку по указанному расположению
         * @param cellName Расположение
         */
        GetCell(cellName: string): Cell;

        /**
         * Используется для получения последней произошедшей ошибки
         */
        GetError(): string;

        /**
         * Используется для получения версии компонента
         */
        GetVersion(): string;

        /**
         * Скрывает колонку
         * @param number Номер колонки
         */
        HideColumn(number: number): void;

        /**
         * Скрывает строку
         * @param number Номер строки
         */
        HideRow(number: number): void;

        /**
         * Объединяет указанные ячейки
         * @param firstRow Номер строки
         * @param firstColumn Номер колонки
         * @param totalRows Количество строк
         * @param totalColumns Количество колонок
         */
        Merge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;
        
        /**
         * Устанавливает ширину колонки
         * @param columnNum Номер колонки
         * @param width Ширина (Double)
         */
        SetColumnWidth(columnNum: number, width: number): 1 | 0;

        /**
         * Устанавливает ширину строки
         * @param rowNum Номер строки
         * @param width Ширина (Double)
         */
        SetRowHeight(rowNum: number, width: number): 1 | 0;
        
        /**
         * Разъединяет указанные ячейки
         * @param firstRow Номер строки
         * @param firstColumn Номер колонки
         * @param totalRows Количество строк
         * @param totalColumns Количество колонок
         */
        UnMerge(firstRow: number, firstColumn: number, totalRows: number, totalColumns: number): 1 | 0;
      }

      class ChartsCollection {

      }

      class PageSetup {

      }

      class Pictures {

      }

      class Cell {
        /**
         * Значение ячейки
         */
        Value: any;
      }

      class Chart {

      }

      class Columns {

      }

      class Rows {

      }

      class Range {

      }
    }
  }

  namespace RegExp {
    interface IRegExpMatchesItem {
      SubMatches(index: number): string;
    }

    interface RegExpMatches {
      Count: number;
      Item(index: number): IRegExpMatchesItem;
    }

    class RegExp {
      Pattern: string;
      Global: boolean;
      IgnoreCase: boolean;
      MultiLine: boolean;
      Execute(string: string): RegExpMatches;
    }
  }
}
