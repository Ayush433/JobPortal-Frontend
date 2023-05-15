import { Card, CardContent, useTheme } from "@mui/material";

const ChartComponent = ({ children }) => {
  return (
    <>
      <div className="pt-5">
        <CardContent>{children}</CardContent>
      </div>
    </>
  );
};

export default ChartComponent;
