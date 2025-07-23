import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Measurements {
  id: string;
  height: number;
  weight: number;
  chest: number;
  waist: number;
  butt: number;
}

interface MeasurementState {
  measurements: Measurements;
  setMeasurements: (measurements: Measurements) => void;
  clearMeasurements: () => void;
}

const initialMeasurementsState: Measurements = {
  id: "",
  height: 0,
  weight: 0,
  chest: 0,
  waist: 0,
  butt: 0,
};

const initialState: MeasurementState = {
  measurements: initialMeasurementsState,
  setMeasurements: () => {},
  clearMeasurements: () => {},
};

export const useMeasurementStore = create<MeasurementState>()(
  persist(
    immer((set) => ({
      ...initialState,
      setMeasurements: (measurements: Measurements) => {
        set((state) => {
          state.measurements = measurements;
        });
      },
      clearMeasurements: () => {
        set((state) => {
          state.measurements = initialMeasurementsState;
        });
      },
    })),
    { name: "measurements" }
  )
);
