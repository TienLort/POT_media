import React, { useMemo, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './styles.css';


import SearchIcon from "@mui/icons-material/Search";
import {
  InputAdornment,
  ListSubheader,
  TextField
} from "@mui/material";

const containsText = (text: string, searchText: string) =>
  text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const allOptions = ["Option One", "Option Two", "Option Three", "Option Four"];

const GameFinder = () => {
  const [selectedOption, setSelectedOption] = useState(allOptions[0]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => allOptions.filter((option) => containsText(option, searchText)),
    [searchText]
  );



  return (
    <div className="finder_wrap">
      <Container maxWidth="lg" sx={{ height: '100%', maxWidth: '1480px !important', paddingBottom: '50px' }} className="WantedSlider">
        <div className="finder_content">
          <div className="content_title">
            Fanatical Game Finder
          </div>
          <div className="content_desc">
            Do you need help finding your next game? Use the filters below and we’ll help you browse through 10,000+ games for something you will love!
          </div>
        </div>
        <div className="finder_search">
          <Box>
            <Box>Select a genre:</Box>
            <FormControl className="search_form">
              <Select
                MenuProps={{ autoFocus: false, disableScrollLock: true }}
                id="search-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                onClose={() => setSearchText("")}
                renderValue={() => selectedOption}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Type to search..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {displayedOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Box>Select a playstyle:</Box>

            <FormControl className="search_form">
              <Select
                MenuProps={{ autoFocus: false, disableScrollLock: true }}
                id="search-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                onClose={() => setSearchText("")}
                renderValue={() => selectedOption}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Type to search..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {displayedOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Box>Select a theme:</Box>
            <FormControl className="search_form">
              <Select
                MenuProps={{ autoFocus: false, disableScrollLock: true }}
                id="search-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                onClose={() => setSearchText("")}
                renderValue={() => selectedOption}
              >
                <ListSubheader>
                  <TextField
                    size="small"
                    autoFocus
                    placeholder="Type to search..."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        e.stopPropagation();
                      }
                    }}
                  />
                </ListSubheader>
                {displayedOptions.map((option, i) => (
                  <MenuItem key={i} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Box>result</Box>
            <Button variant="contained">Search</Button>
          </Box>
        </div>
        <div className="background_finder">
          <img src={require("src/assets/images/product-finder-background.jpg")} alt="product-finder-background" />
        </div>
      </Container >
    </div >
  );
}


export default GameFinder






