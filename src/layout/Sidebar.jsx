/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import {
  CloseIcon,
  SidebarStyled,
  SidebarWrapper,
} from './SidebardStyledComponents';
import { FilterContext } from '../components/Context/filterContext';
import './Sidebar.css';

const Sidebar = ({ show, setIsOpened }) => {
  const { states } = useContext(FilterContext);

  const [humans, setHumans] = useState(states.false);
  const [rebels, setRebels] = useState(states.false);
  const [republic, setRepublic] = useState(states.false);
  const [robots, setRobots] = useState(states.false);
  const [species, setSpecies] = useState(states.false);

  const handleChangeHumans = (e) => {
    setHumans(e.target.value);
    states.function.setHumans(e.target.value);
    
  };

  return (
    <SidebarStyled show={show ? 1 : 0}>
      <SidebarWrapper>
        <CloseIcon
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <span />
        </CloseIcon>
        <div className='filter-by'>FILTER By: </div>
        <div className='sidebar-container'>
          <div className='checkbox'>
            <InputGroup.Checkbox
              aria-label='Checkbox for following text input'
              className='input-group-text'
              onClick={() => {
                setSpecies(species);
              }}
            />
            <div className='filter-category'>Species</div>
          </div>
          <div className='checkbox'>
            <InputGroup.Checkbox
              aria-label='Checkbox for following text input'
              className='input-group-text'
              onChange={(e) => {
                handleChangeHumans(e);
              }}
            />
            <div className='filter-category'>Human</div>
          </div>
          <div className='checkbox'>
            <InputGroup.Checkbox
              aria-label='Checkbox for following text input'
              className='input-group-text'
              onClick={() => {
                setRobots(robots);
              }}
            />
            <div className='filter-category'>Droïd</div>
          </div>
          <div className='checkbox'>
            <InputGroup.Checkbox
              aria-label='Checkbox for following text input'
              className='input-group-text'
            />
            <div
              className='filter-category'
              onClick={() => {
                setRebels(rebels);
              }}
            >
              Alliance
            </div>
          </div>
          <div className='checkbox'>
            <InputGroup.Checkbox
              aria-label='Checkbox for following text input'
              className='input-group-text'
              onClick={() => {
                setRepublic(republic);
              }}
            />
            <div className='filter-category'>Galactic Republic</div>
          </div>
        </div>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
