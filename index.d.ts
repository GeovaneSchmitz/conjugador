export interface PortugueseConjugation {
  /** Presente */
  p: [string, string, string, string, string, string];
  /**Pretérito Imperfeito */
  pi: [string, string, string, string, string, string];
  /**Pretérito Perfeito */
  pp: [string, string, string, string, string, string];
  /**Pretérito Mais-que-perfeito */
  pmqp: [string, string, string, string, string, string];
  /**Futuro do Presente */
  fpte: [string, string, string, string, string, string];
  /**Futuro do Pretérito */
  fpto: [string, string, string, string, string, string];
}

export declare function conjugar(verb: string): PortugueseConjugation;
export declare function isIrregular(verb: string): boolean;
