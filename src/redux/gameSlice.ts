import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CounterState {
  score: number;
  myChoose: string;
  playerWin: string;
  botChoose: string;
  theme: boolean;
  click: boolean;
  page: boolean;
  visible: boolean;
  mood: 'light' | 'dark';
}

const counter: CounterState = {
  score: 0,
  myChoose: '',
  botChoose: '',
  playerWin: '',
  theme: false,
  click: false,
  page: false,
  visible: false,
  mood: 'light',
};

const gameSlice = createSlice({
  name: 'counter',
  initialState: counter,
  reducers: {
    setMood(state, action: PayloadAction<'light' | 'dark'>) {
      state.mood = action.payload;
    },
    setPage(state, action: PayloadAction<boolean>) {
      state.page = action.payload;
    },
    setTheme(state, action: PayloadAction<boolean>) {
      state.theme = action.payload;
    },
    setVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
    setClick(state, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
    setMyChoose(state, action: PayloadAction<string>) {
      state.myChoose = action.payload;
    },
    setBotChoose(state, action: PayloadAction<string>) {
      state.botChoose = action.payload;
    },
    setPlayerWin(state, action: PayloadAction<string>) {
      state.playerWin = action.payload;
    },
    setScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    setPlus(state) {
      state.score += 1;
    },
    setMinus(state) {
      state.score -= 1;
    },
  },
});

export const selectScore = (state: RootState) => state.gameSlice.score;
export const selectMyChoose = (state: RootState) => state.gameSlice.myChoose;
export const selectBotChoose = (state: RootState) => state.gameSlice.botChoose;
export const selectPlayerWin = (state: RootState) => state.gameSlice.playerWin;
export const selectClick = (state: RootState) => state.gameSlice.click;
export const selectTheme = (state: RootState) => state.gameSlice.theme;
export const selectMood = (state: RootState) => state.gameSlice.mood;
export const selectPage = (state: RootState) => state.gameSlice.page;
export const selectVisible = (state: RootState) => state.gameSlice.visible;
export const {
  setClick,
  setPlus,
  setMinus,
  setMyChoose,
  setPlayerWin,
  setBotChoose,
  setMood,
  setTheme,
  setPage,
  setScore,
  setVisible,
} = gameSlice.actions;
export default gameSlice.reducer;
