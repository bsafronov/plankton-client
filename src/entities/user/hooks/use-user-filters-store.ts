import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

type FormProps = {
  firstName: string;
  lastName: string;
  email: string;
  role: string | null;
  username: string;
  departmentId: ID | null;
};
type Actions = {
  clearFilters: () => void;
  setFilters: (data: FormProps) => void;
};

type Props = FormProps & Actions;

const defaultValues: FormProps = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  role: null,
  departmentId: null,
};

const userFilterStore: StateCreator<Props> = (set) => ({
  ...defaultValues,
  clearFilters: () => set(defaultValues),
  setFilters: (data) => set(data),
});

export const useUserFilterStore = create<Props>()(
  persist(userFilterStore, {
    name: "user-filters",
  })
);
