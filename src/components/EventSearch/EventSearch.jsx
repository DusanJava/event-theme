import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
// core components
import eventSearchStyle from "assets/jss/material-dashboard-react/components/eventSearchStyle.jsx";
import DatePickers from "../../components/DatePickers/DatePickers"
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.jsx";

const names = [
  'Theater',
  'Sport',
  'Cinema'
];

class EventSearch extends React.Component {
  state = {
    eventType: null,
    selectedDateFrom: new Date(),
    selectedDateTo: new Date(),
    priceFrom: null,
    priceTo: null
  };

  handleSelectChange = event => {
    this.setState({ eventType: event.target.value });
    console.warn(event.target.value);
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){
  const { classes } = this.props;

    return (
      <div style={{backgroundColor:"#e0e0e0"}}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="age-label-placeholder">
                Event type
              </InputLabel>
              <Select
                value={this.state.eventType}
                onChange={this.handleSelectChange}
                input={<Input name="age" id="age-label-placeholder" />}
                displayEmpty
                name="eventType"
              >
                {names.map(name => (
                  <MenuItem  value={name} >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
              <DatePickers
                className={classes.datePicker}
                label={"Date from"}
                value={this.state.selectedDateFrom}
              />
          </Grid>
          <Grid item xs={12}>
            <DatePickers
              className={classes.datePicker}
              label={"Date to"}
              value={this.state.selectedDateTo}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Price from"
              className={classes.textField}
              onChange={this.handleChange('name')}
              value={this.state.priceFrom}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Price to"
              className={classes.textField2}
              onChange={this.handleChange('name')}
              value={this.state.priceTo}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" className={classes.search}>Search</Button>
            {/*<p className={classes.submit}>Submit button</p>*/}
          </Grid>
        </Grid>
      </div>
    );
  }
}

/*EventSearch.propTypes = {
  classes: PropTypes.object.isRequired
};*/

export default withStyles(eventSearchStyle)(EventSearch);
