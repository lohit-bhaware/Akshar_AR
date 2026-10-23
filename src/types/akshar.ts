export type DyslexiaSeverity = 'Mild' | 'Moderate' | 'Intensive';

export type ColorBlindPalette = 'ClassicCobalt' | 'WarmAmber' | 'VioletIris' | 'Monochrome';

export type SubstrateTint = 'WarmCream' | 'MintIce' | 'Periwinkle' | 'InpaintedPaper';

export interface PaletteColors {
  name: string;
  colorA: string; // Hex
  colorB: string; // Hex
  labelA: string;
  labelB: string;
  contrastRatio: string;
  description: string;
}

export interface SubstrateConfig {
  name: string;
  hex: string;
  textClass: string;
  borderClass: string;
  benefit: string;
}

export interface SyllableToken {
  text: string;
  isAkshar: boolean;
  colorIndex: 0 | 1;
}

export interface PipelineStage {
  step: string;
  title: string;
  sub: string;
  iconName: string;
  tech: string;
  description: string;
  csharpFile: string;
}
