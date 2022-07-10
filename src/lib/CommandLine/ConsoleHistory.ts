import create from "zustand"

interface ConsoleHistoryState {
    history: string[];
    back: (n: number) => string;
    enterHistory: (input: string) => void;
}

const useConsoleHistory = create<ConsoleHistoryState>((set) => ({
    history: [],
    back: (n) => )
}))