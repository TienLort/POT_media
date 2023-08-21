import React, { useEffect } from 'react';
import { AccordionDetails, AccordionSummary, Badge, Box, Container, Switch, Typography } from '@mui/material';
import { ExpandMoreOutlined, LogoutOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import 'moment/locale/vi'
import moment from 'moment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useStyles } from './styles';
import Product from 'src/components/product';
import "./styles.css"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Search = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const classes = useStyles();
  return (
    <Container maxWidth="lg" sx={{ maxWidth: '1480px !important' }} className='about_container'>
      <Box>
        <div>
          Search Results
        </div>
        <div>
          <span>On Sale:</span>
          <Switch {...label} />
          <span>Sort by:</span>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              MenuProps={{ disableScrollLock: true }}
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <span>Show:</span>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              MenuProps={{ disableScrollLock: true }}
              value={age}
              onChange={handleChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
            </Select>
          </FormControl>
          <Box className="search_box">
            <Box className="search_filter">
              <Accordion className={classes.accord} sx={{ borderTop: "1px solid #ccc" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls={`panel1bh-content`}
                  id={`panel1bh-header`}
                >
                  <Box>OK</Box>

                </AccordionSummary>
                <AccordionDetails className={classes.accordDetail}>
                  <Box className={classes.boxDetail}>
                    ok
                  </Box>

                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                  </Box>
                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      ID:
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      1
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accord} sx={{ borderTop: "1px solid #ccc" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls={`panel2bh-content`}
                  id={`panel2bh-header`}
                >
                  <Box>OK</Box>

                </AccordionSummary>
                <AccordionDetails className={classes.accordDetail}>
                  <Box className={classes.boxDetail}>
                    ok
                  </Box>

                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                  </Box>
                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      ID:
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      1
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion className={classes.accord} sx={{ borderTop: "1px solid #ccc" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined />}
                  aria-controls={`panel3bh-content`}
                  id={`panel3bh-header`}
                >
                  <Box>OK</Box>

                </AccordionSummary>
                <AccordionDetails className={classes.accordDetail}>
                  <Box className={classes.boxDetail}>
                    ok
                  </Box>

                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle}>
                      1
                    </Typography>
                  </Box>
                  <Box className={classes.boxDetail} >
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      ID:
                    </Typography>
                    <Typography variant="body2" className={classes.bodyStyle} sx={{ marginLeft: '10px' }}>
                      1
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box className="search_result">
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
              <Product sx={{ width: "calc(33.33% - 20px)" }} />
            </Box>
          </Box>
        </div>
      </Box>


    </Container>

  );
};

export default Search;
