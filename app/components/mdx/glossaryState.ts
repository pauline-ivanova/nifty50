// Server-side state management for glossary section
// This file is NOT a client component, so it can be used in server components

let inGlossarySection = false;
let glossaryCTAInserted = false;

export function resetGlossaryState() {
  inGlossarySection = false;
  glossaryCTAInserted = false;
}

export function setInGlossarySection(value: boolean) {
  inGlossarySection = value;
}

export function isInGlossarySection() {
  return inGlossarySection;
}

export function hasGlossaryCTABeenInserted() {
  return glossaryCTAInserted;
}

export function markGlossaryCTAInserted() {
  glossaryCTAInserted = true;
}

