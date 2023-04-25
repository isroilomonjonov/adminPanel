import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro";

export default function Filter({
  setter,
  setFilter,
}: {
  setter: (set: Date[]) => void;
  setFilter: (set: boolean) => void;
}) {
  const onChange = (value: DateRange<unknown>): void => {
    setter(value.map((e: any) => e?.$d));
    setFilter(false);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <DemoItem label="Filter Statisticts by Date " component="DateRangePicker">
          <DateRangePicker onChange={onChange} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
