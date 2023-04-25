import React, { useEffect, useState, Fragment } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { adminPanelAction } from "../store/store";
type Anchor = "right";
type Type = "Kirim" | "Chiqim";
const schema = yup.object().shape({
  amount: yup.string().required("Amount is a required field"),
  couses: yup.string().required("Couses is a required field"),
});
export default function DrawerMUI() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  const [state, setState] = useState({
    right: false,
    type: "Kirim",
  });
  useEffect(() => {
    reset({});
  }, [state]);
  const toggleDrawer =
    (anchor: Anchor, open: boolean, type?: Type) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        (event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift"
      ) {
        return;
      }
      setState({ [anchor]: open, type: type || "" });
    };

  interface IFormInput {
    amount: number;
    couses: string;
    paymentType: "Naqd" | "Plastik" | "Click" | "Payme";
  }
  const list = () => {
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      dispatch(adminPanelAction.add({ ...data, type: state.type }));
      setState({
        right: false,
        type: "Kirim",
      });
    };
    return (
      <Box sx={{ width: "100%" }} role="presentation">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            padding: "20px",
            gap: "10px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>{state.type} Form</h1>
          <TextField
            label="Amount | Pul Miqdori"
            variant="outlined"
            type="number"
            {...register("amount")}
          />
          {errors.amount && (
            <p style={{ color: "red" }}>{errors.amount.message}</p>
          )}
          <TextField
            label="Couses | Sabab"
            variant="outlined"
            {...register("couses")}
          />
          {errors.couses && (
            <p style={{ color: "red" }}>{errors.couses.message}</p>
          )}
          <label>
            <p style={{ margin: 1 }}>Payment Type</p>
            <select
              style={{
                padding: "10px 70px",
                fontSize: "18px",
                borderRadius: "5px",
              }}
              {...register("paymentType")}
            >
              <option value="Naqd">Naqd</option>
              <option value="Plastik">Plastik</option>
              <option value="Click">Click</option>
              <option value="Payme">Payme</option>
            </select>
          </label>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Box>
    );
  };
  const useStyles = makeStyles({
    paper: {
      width: "50%",
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Fragment key="right">
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <Button
            style={{ backgroundColor: "green" }}
            variant="contained"
            onClick={toggleDrawer("right", true, "Kirim")}
          >
            Kirim
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            variant="contained"
            onClick={toggleDrawer("right", true, "Chiqim")}
          >
            Chiqim
          </Button>
        </div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          classes={{ paper: classes.paper }}
        >
          {list()}
        </Drawer>
      </Fragment>
    </div>
  );
}
