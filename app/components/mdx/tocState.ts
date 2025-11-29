// State management for Table of Contents insertion

let tocInserted = false;
let tocItems: Array<{ id: string; text: string; level: number }> = [];
let category = 'Basics';

export function setTocItems(items: Array<{ id: string; text: string; level: number }>) {
  tocItems = items;
}

export function getTocItems() {
  return tocItems;
}

export function setCategory(cat: string) {
  category = cat;
}

export function getCategory() {
  return category;
}

export function markTocInserted() {
  tocInserted = true;
}

export function hasTocBeenInserted() {
  return tocInserted;
}

export function resetTocState() {
  tocInserted = false;
  tocItems = [];
  category = 'Basics';
}

