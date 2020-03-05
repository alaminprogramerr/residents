import React from 'react'
import Axios from 'axios'
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";


// name:String,
// dateOfAdmission:String,
// dateOfBirth:String,
// cellPhoneNumber:String,
// phoneNumber:String,
// guardianNumber:String,
// additional  details
// gender:String,
// email:String,
// civilStatus:String,
// natureOfAdmission:String,
// educationalAttainment:String,
// religion:String,
// address:String,
// more info
// income:Number,
// typeOfUse:String,
// costSharing:String,
// patientStatus:String



 class AddClient  extends React .Component{
    constructor(){
        super()
        this.state={
          brand:'',
          color:'',
          type:'',
          IMEI:'',
          state:'',
          ID:'',

          name:'',
          address:'',
          contactNumber:'',

          faultName:'',
          faultDescription:'',
          description:"",
          err:{}
        }
    }
    changeHandler=(event)=>{
        console.log(event.target.value)
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submiHandler=(event)=>{
        event.preventDefault()
        let obj= {

          brand:this.state.brand,
          color:this.state.color,
          type:this.state.type,
          IMEI:this.state.IMEI,
          state:this.state.state,
          ID:this.state.ID,

          name:this.state.name,
          address:this.state.address,
          contactNumber:this.state.contactNumber,

          faultName:this.state.faultName,
          faultDescription:this.state.faultDescription,
          description:this.state.description
        }
        Axios.post('/api/createNewClient', obj)
        .then(res=>{
          window.location='/faultSearch'
        })
        .catch(err=>{
          this.setState({
            err:err.response.data
          })
        })

    }
        render(){

            return(
                <div className="col-md-8 mt-5 offset-md-2 mt-3 mb-3">
                    <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h3 className="m-0">Register new Residents</h3>
                        </CardHeader>
                        <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Row>
                            <Col>
                                <form onSubmit={this.submiHandler}>
                                <Row form>
                                    <h5 className="col-md-12">Residents Details</h5>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="name"> First Name</label>
                                    <FormInput
                                        className={this.state.err.name?"is-invalid":''}
                                        name="name"
                                        id="name"
                                        placeholder=" Name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor=""> Date Of Admission</label>
                                    <FormInput
                                        className={this.state.err.address?"is-invalid":''}
                                        name="address"
                                        id="name"
                                        type="date"
                                        placeholder=" Date of admission"
                                        value={this.state.address}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="feLastName">Date Of Birth</label>
                                    <FormInput
                                        className={this.state.err.ID?"is-invalid":''}
                                        name="contactNumber"
                                        id="id"
                                        type="number"
                                        placeholder="Date Of Birth"
                                        value={this.state.contactNumber}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="email">Cell Phone Number</label>
                                    <FormInput
                                        className={this.state.err.brand?"is-invalid":''}
                                        type="text"
                                        name="brand"
                                        id="email"
                                        placeholder="Cell Phone Number"
                                        value={this.state.brand}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>

                                    <Col md="4" className="form-group">
                                    <label htmlFor="">Guardian  Number</label>
                                    <FormInput
                                        className={this.state.err.color?"is-invalid":''}
                                        type="text"
                                        name="color"
                                        placeholder="Guardian  Number"
                                        value={this.state.color}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="email">Gender </label>
                                    <FormInput
                                        className={this.state.err.type?"is-invalid":''}
                                        type="text"
                                        name="type"
                                        placeholder="Gender"
                                        value={this.state.type}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>

                                </Row>
                                <Row form>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="address">Email</label>
                                    <FormInput
                                        className={this.state.err.IMEI?"is-invalid":''}
                                        name="IMEI"
                                        placeholder="Emil"
                                        value={this.state.IMEI}
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="">Civil Status</label>
                                    <FormInput
                                        className={this.state.err.state?"is-invalid unstyled":'unstyled'}
                                        name="state"
                                        type="number"
                                        value={this.state.state}
                                        id="number"
                                        placeholder="Civil Status"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                    <Col md="4" className="form-group">
                                    <label htmlFor="">Educational Attainment</label>
                                    <input
                                        className={this.state.err.ID?"is-invalid  form-control":' form-control'}
                                        name="ID"
                                        value={this.state.ID}
                                        type="number"
                                        id="ID"
                                        placeholder="Educational Attainment"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                  <h5 className="col-md-12">Nature Of Admission</h5>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="serviceName">Fault name</label>
                                    <FormInput
                                        className={this.state.err.faultName?"is-invalid":''}
                                        id="faultName"
                                        placeholder="Fault name"
                                        name="Nature Of Admission"
                                        onChange={this.changeHandler}
                                        value={this.state.faultName}
                                    />
                                    </Col>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="">religion</label>
                                    <FormInput
                                        className={this.state.err.faultDescription?"is-invalid":''}
                                        name="faultDescription"
                                        value={this.state.faultDescription}
                                        id="faultDescription"
                                        placeholder="Religion"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="12" className="form-group">
                                    <label htmlFor="description">Address</label>
                                    <FormInput
                                        id="description"
                                        className={this.state.err.description?"is-invalid":''}
                                        value={this.state.description}
                                        onChange={this.changeHandler}
                                        name="description"
                                        placeholder="Address "
                                    />
                                    </Col>
                                </Row>

                                <Row form>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="serviceName">Income</label>
                                    <FormInput
                                        className={this.state.err.faultName?"is-invalid":''}
                                        id="faultName"
                                        placeholder="Income"
                                        name="Nature Of Admission"
                                        onChange={this.changeHandler}
                                        value={this.state.faultName}
                                    />
                                    </Col>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="">Type Of Use</label>
                                    <FormInput
                                        className={this.state.err.faultDescription?"is-invalid":''}
                                        name="faultDescription"
                                        value={this.state.faultDescription}
                                        id="faultDescription"
                                        placeholder="Type Of Use"
                                        onChange={this.changeHandler}
                                    />
                                    </Col>
                                </Row>
                                <Row form>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="description">Cost Sharing</label>
                                    <FormInput
                                        id="description"
                                        className={this.state.err.description?"is-invalid":''}
                                        value={this.state.description}
                                        onChange={this.changeHandler}
                                        name="description"
                                        placeholder="Cost Sharing "
                                    />
                                    </Col>
                                    <Col md="6" className="form-group">
                                    <label htmlFor="description">Patient Status</label>
                                    <FormInput
                                        id="description"
                                        className={this.state.err.description?"is-invalid":''}
                                        value={this.state.description}
                                        onChange={this.changeHandler}
                                        name="description"
                                        placeholder="Patient Status "
                                    />
                                    </Col>
                                </Row>
                                <Button theme="accent">Submit</Button>
                                </form>
                            </Col>
                            </Row>
                        </ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            )
        }
     }


export default AddClient
