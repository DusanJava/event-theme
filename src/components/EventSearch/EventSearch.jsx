import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
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
    selectedDate: new Date('2014-08-18T21:11:54'),
    name: null
  };

 /* handleChange = event => {
    this.setState({ name: event.target.value });
  };*/

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){
  const { classes } = this.props;

    return (
      <div style={{backgroundColor:"#e0e0e0"}}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl className={classes.formControl} >
              <InputLabel htmlFor="age-simple">Event type</InputLabel>
              <Select
                value={this.state.eventType}
                onChange={this.handleChange}
                inputProps={{
                  name: 'eventType',
                  id: 'age-simple',
                }}
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
              />
          </Grid>
          <Grid item xs={12}>
            <DatePickers
              className={classes.datePicker}
              label={"Date to"}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Price from"
              className={classes.textField}
              onChange={this.handleChange('name')}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Price to"
              className={classes.textField}
              onChange={this.handleChange('name')}
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
