import { create } from "zustand";
interface QuestionModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
const useQuestionModal = create<QuestionModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
export default useQuestionModal;
