import { create } from "zustand";
import { subjects } from "../data";

interface Sub {
  id: number;
  title: string;
}

type InitialState = {
  numberOfBooks: number;
  zOrderBook: () => void;
  zRestockBooks: (value: number) => void;
  subjects: Sub[];
  zCourses: () => string[];
};

export const useBooks = create<InitialState>((set) => ({
  numberOfBooks: 20,
  subjects,

  zOrderBook: () =>
    set((state) => ({ numberOfBooks: state.numberOfBooks - 1 })),
  zRestockBooks: (value) =>
    set((state) => ({ numberOfBooks: state.numberOfBooks + value })),
  zCourses: () => subjects.map((i: Sub) => i.title.toUpperCase() + " \n "),
}));
