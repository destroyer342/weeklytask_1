import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Box, Container } from "@mui/system";

const Usingfunctionhook = () => {
  const [Twofield, setTwofield] = useState({
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const handleValidation = () => {
    const fields = {
      firstName: {
        type: "Alphabet",
        tag: "First Name",
      },
      lastName: {
        type: "Alphabet",
        tag: "Last Name",
      },
    };
    const Validate = /^[a-zA-Zs]*$/;
    let errors = {};
    for (const field in fields) {
      const { type, tag } = fields[field];
      const value = Twofield[field].trim();

      if (!value) {
        errors[field] = `${tag} is empty. Please insert value.`;
      } else if (type === "Alphabet") {
        if (!value.match(Validate)) {
          errors[field] = `${tag} must be an alphabet only.`;
        }
      }
    }
    setErrors(errors);
    return errors;
  };
  const handleFieldChange = (e) => {
    const {
      target: { value, name, id },
    } = e;
    setTwofield({ ...Twofield, [id || name]: value });
  };
  const handleFormSubmit = () => {
    const errors = handleValidation();

    if (!Object.keys(errors).length) {
      setTwofield({
        firstName: "",
        lastName: "",
      });
      alert("Full Name Submitted");
    }
  };
  
  return (
    <Container maxWidth="lg" style={{ padding: "20px 0" }}>
      <Box style={{ maxWidth: "700px", margin: "0 auto" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="firstName" name="First Name" label="First Name"  error={errors?.firstName ? true : false} helperText={errors?.firstName || ""} value={Twofield.firstName} onChange={handleFieldChange} fullWidth/>
            </Grid>
            <Grid item xs={12}>
              <TextField id="lastName" name="Last Name" label="Last Name" error={errors?.lastName ? true : false} helperText={errors?.lastName || ""} value={Twofield.lastName} onChange={handleFieldChange} fullWidth/>
            </Grid>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Button variant="contained"  onClick={handleFormSubmit} style={{ backgroundColor: `red` }} fullWidth >
                Submit Now
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Usingfunctionhook;
