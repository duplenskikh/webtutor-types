interface Math {
  /**
   * Округление значения числового выражения к ближайшему целому.
   * @param number - число, округляемое до ближайшего целого (Real).
   */
  round(number: number): number;

  /**
   * Возвращает квадратный корень числа .
   * @param number числовое выражение (Real).
   */
  sqrt(number: number): number;

  ceil(number: number): number;
}

declare const Math: Math;
