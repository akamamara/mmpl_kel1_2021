import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "../../components/surfaces/Button";
import BiodataPribadi from "./BiodataPribadi";
import BiodataOrangTua from "./BiodataOrangTua";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Biodata() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ flexGrow: 1 }}
        >
          <Tab label="Pribadi" {...a11yProps(0)} />
          <Tab label="Orang Tua" {...a11yProps(1)} />
        </Tabs>
        <Button color="success" onClick={() => alert("hoi")} sx={{ mb: 1 }}>
          Ubah Profil
        </Button>
      </Box>
      <TabPanel value={value} index={0}>
        <BiodataPribadi />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BiodataOrangTua />
      </TabPanel>
    </Box>
  );
}
