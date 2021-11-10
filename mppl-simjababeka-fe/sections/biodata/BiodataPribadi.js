import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DataPribadiLabel from "@/utils/list/BiodataList";
import { Subtitle2 } from "@/components/typography/Heading";

const Item = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

export default function BiodataPribadi({ showData }) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {DataPribadiLabel.map((it, index) => (
            <Grid item xs={4} sm={8} md={6} key={index}>
              <Item>
                <Subtitle2>{it}</Subtitle2>
              </Item>
              <Item>
                <Subtitle2>{showData[index]}</Subtitle2>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
