/*- reviewerBody.jsx -*/

import React from 'react';
// Not pleased with this table since the advanced option require a paid subscription, but it was quicker than learning react-table
import { DataGrid } from '@mui/x-data-grid';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // To create a react table we first define the columns with all required attributes
        eventColumns : [
          { field: 'id', headerName: 'ID', width: 50},
          { field: 'name', headerName: 'Event name', width: 130, editable: true },
          { field: 'details', headerName: 'Description', flex: 1, editable: true },
          { field: 'sponsor', headerName: 'Sponsor', width: 130, editable: true },
          { field: 'preference', headerName: 'Preference', width: 130, editable: true },
          { field: 'duration', headerName: 'Duration', width: 130, editable: true},
          { field: 'status', headerName: 'Status', width: 100, editable: true },
          { field: 'created_date', headerName: 'Creation date', width: 220 },
          { field: 'modified_date', headerName: 'Last modified', width: 220, editable: true }
        ],
        promoColumns : [
          { field: 'id', headerName: 'ID', width: 70 },
          { field: 'name', headerName: 'Promotion name', width: 130 },
          { field: 'details', headerName: 'Description', width: 130 },
          { field: 'target', headerName: 'Target', width: 130 },
          { field: 'preference', headerName: 'Preference', width: 130 },
          { field: 'duration', headerName: 'Duration', type: 'number', width: 90 },
          { field: 'status', headerName: 'Status',width: 130,},
          { field: 'created_date', headerName: 'Creation date', width: 130 },
          { field: 'modified_date', headerName: 'Last modified', width: 130 }
        ],
        // We will store the JSON response in these
        eData : [],
        pData : [],
        // We will put the extracted values here
        eventRows : [],
        promoRows : [],
        // Value for the select dropdown used to display different tables
        display : ''
    };
    // The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, 
    // with a given sequence of arguments preceding any provided when the new function is called.
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // All our BBDD fetch to populate rows
  componentDidMount() {
    fetch('http://localhost:3001/events/all')
        .then(function(res) {
          return res.json();
      }).then((json)=> {
          this.setState({
          eData: json
          })
      });
    fetch('http://localhost:3001/promotions/all')
      .then(function(res) {
        return res.json();
    }).then((json)=> {
        this.setState({
        pData: json
        })
    });
  }

  // The moment an option is selected, create the corresponding table
  handleOptionChange = (event) => {
    event.preventDefault();
    this.setState({display : event.target.value})

    // This is kinda impractical but using empty temporary array proved useful
    var foo = []
    for(let i = 0; i < this.state.eData.length; i++){
      var eventRow = 
        { id: i, 
          name: this.state.eData[i].name,
          details: this.state.eData[i].details,
          sponsor: this.state.eData[i].sponsor, 
          preference: this.state.eData[i].preference, 
          duration: this.state.eData[i].duration, 
          status: this.state.eData[i].status,
          created_date: this.state.eData[i].created_date,
          modified_date: this.state.eData[i].modified_date
        }
      foo.push(eventRow)
    }
    // After saving all values in local foo array, put them in the global row variable
    this.setState({eventRows : foo})

    foo = []
    for(let i = 0; i < this.state.pData.length; i++){
      var promoRow = 
        { id: i, 
          name: this.state.pData[i].name,
          details: this.state.pData[i].details,
          target: this.state.pData[i].target, 
          preference: this.state.pData[i].preference, 
          duration: this.state.pData[i].duration, 
          status: this.state.pData[i].status,
          created_date: this.state.pData[i].created_date,
          modified_date: this.state.pData[i].modified_date
        }
      foo.push(promoRow)
    }
    this.setState({promoRows : foo})
  }

  // Submit values for troubleshooting
  onSubmit = () =>{
    console.log(this.state.eventRows)
  }

  render (){
    return (
      <div>
        <div  className="form-body">
          <select className="form-control" value={this.state.display} onChange={this.handleOptionChange}>
            <option>Seleccione la publicación a revisar</option>
            <option>Eventos</option>
            <option>Promociones</option>
          </select>
        </div>
        <div>
          {this.state.display==='Eventos' && // if it's true return the actual JSX
          <div className="form-group">
            <label> Revisar eventos </label>
            <DataGrid /* Table with all its attributes, as you can see it was a mess to figure out, has to be changed */
              editMode="row"
              style={{ width: '90%', background: "white", marginLeft: "auto", marginRight: "auto"}}
              rows={this.state.eventRows}
              columns={this.state.eventColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              autoHeight
              experimentalFeatures={{ newEditingApi: true }}
              rowSelection='single'
              checkboxSelection='single'
            />
          </div>
          }
        </div>
        <div>
          {this.state.display==='Promociones' &&
          <div className="form-group">
            <label> Revisar Promociones </label>
            <DataGrid
              editMode="row"
              style={{ width: '90%', background: "white", marginLeft: "auto", marginRight: "auto"}}
              rows={this.state.promoRows}
              columns={this.state.promoColumns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              autoHeight
              experimentalFeatures={{ newEditingApi: true }}
            />
          </div>
          }
        </div>
        <button type="button" onClick={this.onSubmit}>Imprimir data</button>
      </div>
    )
  }
}

export default Body