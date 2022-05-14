import React, { useEffect } from "react";
import "../Slider.css";
//Steper
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useDispatch, useSelector } from "react-redux";
import consultar_estrenos_action from "../Redux/action/estrenos_action";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ProximosEstrenos = () => {

  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const dispatch = useDispatch();

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    dispatch(consultar_estrenos_action());
  }, []);

  const { nvs_estrenos } = useSelector((state) => state.nvs_estrenos);
  const maxSteps = nvs_estrenos.length;

  return (
    <div className="slideFondo">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {nvs_estrenos.map((estreno, index) => (
          <div key={estreno.id} className="slide">
            <div>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  src={`${IMG_URL}${estreno.poster_path}`}
                  alt={estreno.original_title}
                  // style={{ width: "200px" }}
                  className="poster"
                />
              ) : null}
            </div>
            <div style={{ width: "400px", margin: "20px" }}>
              <Typography>{estreno.original_title}</Typography>
              <p variant="overline">{estreno.overview}</p>
              <Typography>{estreno.release_date}</Typography>
            </div>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            color="warning"
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            color="warning"
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default ProximosEstrenos;
