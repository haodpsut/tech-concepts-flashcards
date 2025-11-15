
export interface Concept {
  name: string;
}

export interface Category {
  title: string;
  concepts: Concept[];
}

export interface Explanation {
  englishExplanation: string;
  vietnameseExplanation: string;
}
