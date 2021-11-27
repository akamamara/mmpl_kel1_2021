import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@/components/input/Button";
import BiodataPribadi from "./BiodataPribadi";
import BiodataOrangTua from "./BiodataOrangTua";
import { Subtitle1, Subtitle2 } from "@/components/typography/Heading";
import { styled } from "@mui/material/styles";
import DataPribadiLabel, {
  DataPribadi,
  DataOrangTua,
} from "@/utils/list/BiodataList";
import FormDialog from "@/components/surfaces/Dialog";
import InputText from "@/components/input/Input";
import { BasicSelect } from "@/components/input/Input";
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

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    fontFamily: "Kreon, Roboto, sans-serif",
    fontSize: "1.00rem",
    color: "#0B5733",
  })
);

export default function Biodata({ dialogHandler, open }) {
  const [value, setValue] = React.useState(0);
  const [showDataPribadi, setShowDataPribadi] = React.useState([]);
  const [showDataOrangTua, setShowDataOrangTua] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toArrayData = (data) => {
    const temp = Object.values(data);
    console.log(temp);
    return temp;
  };

  React.useEffect(() => {
    setShowDataPribadi(toArrayData(DataPribadi[0]));
    setShowDataOrangTua(toArrayData(DataOrangTua[0]));
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", display: "flex" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ flexGrow: 1 }}
        >
          <StyledTab label="Pribadi" {...a11yProps(0)} />
          <StyledTab label="Orang Tua" {...a11yProps(1)} />
        </Tabs>
        <Button
          variant="contained"
          size="small"
          color="cancel"
          sx={{ mb: 1, mr: 1 }}
        >
          <Subtitle1>Hapus Akun</Subtitle1>
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          onClick={dialogHandler.handleClickOpen}
          sx={{ mb: 1 }}
        >
          <Subtitle1>Ubah Profil</Subtitle1>
        </Button>
        <FormDialog
          dialogHandler={dialogHandler}
          open={open}
          title="Ubah Profil"
        >
          {DataPribadiLabel.map((title, index) => (
            <Box key={index}>
              <Subtitle2>{title}</Subtitle2>
              {title === "Agama" ||
              title === "Golongan Darah" ||
              title === "Jenis Kelamin" ? (
                <BasicSelect
                  action={(e) => dialogHandler.handleChange(e, title)}
                  value={dialogHandler.checkValue(title)}
                  data={dialogHandler.checkData(title)}
                />
              ) : (
                <InputText
                  name={title}
                  sx={{ width: "100%", mb: 1 }}
                  onChange={dialogHandler.handleInput}
                />
              )}
            </Box>
          ))}
        </FormDialog>
      </Box>

      <TabPanel value={value} index={0}>
        <BiodataPribadi showData={showDataPribadi} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BiodataOrangTua showData={showDataOrangTua} />
      </TabPanel>
    </Box>
  );
}
