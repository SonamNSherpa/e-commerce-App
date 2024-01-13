import { Typography } from "@mui/material";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const StyledForm = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "10px",
  color: "blueviolet",
  marginBottom: "10px",
  backgroundColor: "#f3e5f5",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  rowGap: "10px",
  backgroundColor: "#f3e5f5",
});

const StyledDiv = styled("div")({
  display: "flex",
  gridTemplateColumns: "1fr 1fr",
  marginLeft: "40px",
});

const LoginTrial: React.FC = () => {
  return (
    <StyledDiv>
      <div
        style={{ width: "700px", height: "500px", backgroundColor: "#f3e5f5" }}
      >
        <form action="https://api.web3forms.com/submit" method="POST">
          <Typography
            variant="h4"
            style={{
              marginBottom: "30px",
              marginTop: "35px",
              marginLeft: "40px",
            }}
          >
            Send Me Your Queries
          </Typography>
          <input
            type="hidden"
            name="access_key"
            value="ea744b34-ee2c-4605-a14e-176d417f9739"
          ></input>
          <StyledForm>
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField
              id="filled-basic"
              label="Phone"
              variant="filled"
              type="int"
            />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Subject" variant="filled" />
          </StyledForm>
          <StyledBox>
            <TextField
              id="filled-basic"
              label="Message"
              variant="filled"
              multiline
              rows={4}
              style={{ width: "650px" }}
            />
            <Button variant="contained">Sumbit</Button>
          </StyledBox>
        </form>
      </div>

      <div
        style={{ width: "700px", height: "500px", backgroundColor: "#3d5afe" }}
      ></div>
    </StyledDiv>
  );
};

export default LoginTrial;
