import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class EventTablePage extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      editView: false,
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({...this.state, rowsPerPage: event.target.value });
  };

  render(){
  const { classes } = this.props;
  let { editView } = this.state;
  const { page, rowsPerPage } = this.state;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
              <h4 className={classes.cardTitleWhite}>Event Table</h4>
              <p className={classes.cardCategoryWhite}>
                Here is a subtitle for this table
              </p>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Fab onClick={() => this.setState({editView: !editView})}
                     style={{ float: "right", marginRight: "10px", backgroundColor: "#e0e0e0", width:"40px", height:"40px"}} color="primary"
                     aria-label="Edit">
                  <Icon style={{ color: "black"}}>add_icon</Icon>
                </Fab>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              handleChangePage={this.handleChangePage}
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
              page={page}
              rowsPerPage={rowsPerPage}
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
  }
}

export default withStyles(styles)(EventTablePage);
