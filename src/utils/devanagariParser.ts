/**
 * Linguistic Devanagari Syllable Parser
 * TypeScript port of DevanagariSyllableParser.cs from omawadhoot/AksharAR
 * 
 * Accurately parses Devanagari unicode range (\u0900 - \u097F)
 * Preserves unbroken samyuktakshars (conjunct ligatures with virama ्),
 * matras (vowel signs), nuktas (़), anusvaras (ं), chandrabindus (ँ), and visargas (ः).
 */

const VIRAMA = '\u094D';      // Halant ्
const NUKTA = '\u093C';       // Nukta ़
const ANUSVARA = '\u0902';    // Anusvara ं
const CHANDRABINDU = '\u0901';// Chandrabindu ँ
const VISARGA = '\u0903';     // Visarga ः

export function isDevanagariChar(c: string): boolean {
  const code = c.charCodeAt(0);
  return code >= 0x0900 && code <= 0x097F;
}

export function isDevanagariConsonant(c: string): boolean {
  const code = c.charCodeAt(0);
  return (code >= 0x0915 && code <= 0x0939) || (code >= 0x0958 && code <= 0x095F);
}

export function isDevanagariIndependentVowel(c: string): boolean {
  const code = c.charCodeAt(0);
  return (code >= 0x0904 && code <= 0x0914) || (code >= 0x0960 && code <= 0x0961) || code === 0x0972;
}

export function isDevanagariMatraOrModifier(c: string): boolean {
  const code = c.charCodeAt(0);
  return (
    (code >= 0x093E && code <= 0x094C) ||
    (code >= 0x094E && code <= 0x094F) ||
    (code >= 0x0955 && code <= 0x0957) ||
    code === 0x0962 ||
    code === 0x0963 ||
    c === ANUSVARA ||
    c === CHANDRABINDU ||
    c === VISARGA ||
    c === NUKTA
  );
}

/**
 * Splits a Devanagari word into linguistically sound Akshar (syllable) clusters.
 * Preserves unbroken ligatures, halants, and conjunct clusters.
 */
export function splitIntoAkshars(word: string): string[] {
  const syllables: string[] = [];
  if (!word) return syllables;

  let i = 0;
  const len = word.length;

  while (i < len) {
    const current = word[i];

    // If whitespace, punctuation, or non-Devanagari, preserve as single char
    if (/\s/.test(current) || /[.,!?;:'"()[\]{}]/.test(current) || !isDevanagariChar(current)) {
      syllables.push(current);
      i++;
      continue;
    }

    const clusterStart = i;

    // 1. Independent Vowel Cluster (e.g. आ, ई, औ)
    if (isDevanagariIndependentVowel(current)) {
      i++;
      // Consume attached anusvara, visarga, or chandrabindu
      while (i < len && (word[i] === ANUSVARA || word[i] === VISARGA || word[i] === CHANDRABINDU)) {
        i++;
      }
      syllables.push(word.substring(clusterStart, i));
      continue;
    }

    // 2. Consonant / Conjunct Cluster (e.g. क् + य = क्य, स + ् + त = स्त)
    if (isDevanagariConsonant(current)) {
      i++;
      if (i < len && word[i] === NUKTA) i++;

      while (i < len) {
        if (word[i] === VIRAMA) {
          // Halant detected: checks if followed by another consonant or ZWJ/ZWNJ
          i++;
          if (i < len && (word[i] === '\u200D' || word[i] === '\u200C')) {
            i++;
          }
          if (i < len && isDevanagariConsonant(word[i])) {
            i++;
            if (i < len && word[i] === NUKTA) i++;
          } else {
            // Standalone halant at end of syllable/word (e.g. 'त्')
            break;
          }
        } else if (isDevanagariMatraOrModifier(word[i])) {
          i++;
        } else {
          // Reached next consonant or non-modifier
          break;
        }
      }
      syllables.push(word.substring(clusterStart, i));
      continue;
    }

    // Fallback for any other glyphs
    syllables.push(current);
    i++;
  }

  return syllables;
}

export interface RenderedSyllable {
  text: string;
  isSeparator?: boolean;
  colorHex: string;
  wordIndex: number;
  syllableIndex: number;
}

export function parseAndColorizeSentence(
  sentence: string,
  colorA: string,
  colorB: string,
  insertSeparators: boolean = false,
  separatorColorHex: string = '#64748B'
): RenderedSyllable[][] {
  const lines = sentence.split('\n');
  const result: RenderedSyllable[][] = [];

  lines.forEach((line) => {
    const lineTokens: RenderedSyllable[] = [];
    const words = line.split(' ');
    let useColorA = true;

    words.forEach((word, wIdx) => {
      if (!word) {
        lineTokens.push({
          text: ' ',
          colorHex: colorA,
          wordIndex: wIdx,
          syllableIndex: -1,
        });
        return;
      }

      const akshars = splitIntoAkshars(word);

      akshars.forEach((akshar, kIdx) => {
        const isWhitespace = /^\s+$/.test(akshar);
        if (isWhitespace) {
          lineTokens.push({
            text: akshar,
            colorHex: colorA,
            wordIndex: wIdx,
            syllableIndex: kIdx,
          });
          return;
        }

        const currentColor = useColorA ? colorA : colorB;
        lineTokens.push({
          text: akshar,
          colorHex: currentColor,
          wordIndex: wIdx,
          syllableIndex: kIdx,
        });

        // Add subtle syllable separator dot if configured, but not after the last syllable of a word
        if (insertSeparators && kIdx < akshars.length - 1 && akshars[kIdx + 1].trim().length > 0) {
          lineTokens.push({
            text: '·',
            isSeparator: true,
            colorHex: separatorColorHex,
            wordIndex: wIdx,
            syllableIndex: kIdx,
          });
        }

        useColorA = !useColorA;
      });

      if (wIdx < words.length - 1) {
        lineTokens.push({
          text: ' ',
          colorHex: colorA,
          wordIndex: wIdx,
          syllableIndex: 999,
        });
      }
    });

    result.push(lineTokens);
  });

  return result;
}
