import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import LocalMallIcon from "@mui/icons-material/LocalMall";

function Menu() {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img
          className="logo"
          src="https://s3-alpha-sig.figma.com/img/a903/9b46/0662010ff5502364c9f4da64de3b3531?Expires=1646611200&Signature=cyKanHZNFNXg0kQJ-iJZjpjWQ-lNvOlwutZw6zNBhOT-1eIxaSkuCmoxgnw6y7XjlYJHERlm5iIPFuqc4ka7bnaeEySle7Pt94j7B~naOmPGrdHPrBCuLwLtckpYj8VMVpQ4ohJ02qPvjS0G5k4G01-vntUfJ6tS0hRQ-AfTUCmDnAkfhNVgeqAfgx1dsMD-GMtdzeTZuhtQ-2L9pN~htPu0L-TImXBM0Pe0sPHAL1mtEkkyQQMxiXSiNoZs34bvpeKxYHBwj6WEAOZ0N8H5BV0D1dwYEMh3dgq~ZrCIABEzzKopWQI4AjPiILdnEVLDcyTGhgS1l1wBbtjYbwvKTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        />
      </div>
      <div className="grid-item">
        <Stack
          justifyContent="center"
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Grid direction="row" alignItems="center">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <div>Search</div>
            </Grid>
          </Grid>
          <div>Help</div>
          <div>Account</div>
          <LocalMallIcon />
        </Stack>
      </div>
    </div>
  );
}
export default Menu;
